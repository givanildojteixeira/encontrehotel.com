type Hotel = {
  id?: string; // reserved for firestore id
  nome: string;
  estrelas: number;
  local: string;
  vista: string;
  descricao: string;
  quarto: string;
  cancelamento: boolean;
  preco: number;
  adicionais: string;
};

export default Hotel;
