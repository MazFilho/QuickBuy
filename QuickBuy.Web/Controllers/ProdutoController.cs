using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using System;
using System.IO;
using System.Linq;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;

        public ProdutoController(
            IProdutoRepositorio produtoRepositorio,
            IHttpContextAccessor httpContextAccessor,
            IHostingEnvironment hostingEnvironment
            )
        {
            _produtoRepositorio = produtoRepositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                //Return bem sucedido
                return Ok(_produtoRepositorio.ObterTodos());
                //ou por uma condição
                //if(condicao == false)
                //{
                //    return BadRequest("")
                //}
            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        
        [HttpPost]
        public IActionResult Post([FromBody] Produto produto)
        {
            produto.Validate();
            if (!produto.EhValido)
            {
                return BadRequest(produto.ObterMensagensValidacao());
            }

            try
            {
                _produtoRepositorio.Adicionar(produto);
                return Created("api/produto", produto);

            }catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
            
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArqvuivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);
                var folderFiles = _hostingEnvironment.WebRootPath + "\\Files\\";
                var nomeCompleto = folderFiles + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);


            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
        {
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }
    }
}
