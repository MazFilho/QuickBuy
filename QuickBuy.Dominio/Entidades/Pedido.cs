using QuickBuy.Dominio.ObjetoDeValor;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public String CEP { get; set; }
        public String Estado { get; set; }
        public String Cidade { get; set; }
        public String EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }



        public int FormaPagamentoId { get; set; }

        public FormaPagamento FormaPagamento { get; set; }




        //Pedido deve ter pelo menos um Item de pedido ou muitos Itens pedidos
        public ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (!ItensPedido.Any())
                AdicionarCritica("Crítica: Pedido deve ter ao menos um Item de Pedido.");

            if (string.IsNullOrEmpty(CEP))
                AdicionarCritica("Crítica: CEP deve ser preenchido.");



        


        }
    }
}
