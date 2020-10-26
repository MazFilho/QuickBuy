using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;       
        }
    }
}
