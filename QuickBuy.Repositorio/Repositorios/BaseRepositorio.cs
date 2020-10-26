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
        // Pegando a instancia (DbContext) criada pela propria infra do asp net core (configure services) e armezanando internamente na classe BaseRepositorio.
        // Conexão das classes com banco de dados, (implementar os metodos d basereositorio) pegando as configurações de DbContext, q são configurads/referenciadas na classe Startup.
        
        
        //Armazena internamente instancia recebida da startup.cs (configure service)
        protected readonly QuickBuyContexto QuickBuyContexto;
        
        //Construtor q recebe instncia de Startup.cs (Configure Service)
        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            QuickBuyContexto = quickBuyContexto;
        }

        //Metodos

        public void Adicionar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Add(entity);
            QuickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            QuickBuyContexto.Set<TEntity>().Update(entity);
            QuickBuyContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return QuickBuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return QuickBuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            //QuickBuyContexto.Set<TEntity>().Remove(entity);
            QuickBuyContexto.Remove(entity);
            QuickBuyContexto.SaveChanges();
        }
        public void Dispose()
        {
            QuickBuyContexto.Dispose();
        }
    }
}
