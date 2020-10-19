using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public String Nome { get; set; }
        public String Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do produto não foi informado.");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição do produto não foi informado.");

            if (Preco == 0)
                AdicionarCritica("Preço do produto não foi informado.");

        }
    }
}
