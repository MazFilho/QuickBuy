using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {

        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao 
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }

        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public string ObterMensagensValidacao()
        {
            return string.Join(". ", mensagemValidacao);
        }

        public abstract void Validate();

        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
    }
}
