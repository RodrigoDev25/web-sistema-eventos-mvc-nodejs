
function listar() {
  
const eventos = [
  { id: 101, nome: "Tech Summit 2025", data: "2025-07-15", local: "São Paulo - SP" },
  { id: 102, nome: "Festival de Inovação", data: "2025-08-10", local: "Recife - PE" },
  { id: 103, nome: "Conferência de Software Livre", data: "2025-09-01", local: "Porto Alegre - RS" },
  { id: 104, nome: "Encontro de Startups", data: "2025-10-22", local: "Belo Horizonte - MG" },
  { id: 105, nome: "Semana de Tecnologia", data: "2025-11-05", local: "Curitiba - PR" }
];
  return eventos;
}

module.exports = {
  listar
};