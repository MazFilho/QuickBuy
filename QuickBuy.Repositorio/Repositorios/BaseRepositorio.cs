using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {


        // Pegando a instancia (DbContext) criada pela propria infra do asp net core e armezanando internamente na classe BaseRepositorio.
        // Conexão das classes com banco de dados, pegando as configurações de DbContext, q são configurads/referenciadas na classe Startup.
        
        public readonly QuickBuyContexto _quickBuyContexto;
        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            _quickBuyContexto = quickBuyContexto;
        }

        public void Adicionar(TEntity entity)
        {
            _quickBuyContexto.Set<TEntity>().Add(entity);
        }

        public void Atualizar(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public TEntity ObterPorId(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return _quickBuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            throw new NotImplementedException();
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
