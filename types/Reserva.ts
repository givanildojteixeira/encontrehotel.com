type Hotel = {
  id?: string; // reserved for firestore id
  nomeHotel: string;
  nroEestrelas: string;
  localizacao: string;
  pontoVista: string;
  observacao: string;
  tipoQuarto: string;
  cancela: string;
  valor: string;
  opcionais: string;
  dataChegada: string;
  dataSaida: string;
  pagamento: string
};

export default Hotel;
