const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  let totalFaturamento = 0;

  // calculo do faturamento total
  
  for (let estado in faturamentoMensal) {
    totalFaturamento += faturamentoMensal[estado];
  }

// calculo do percentual de cada estado  por valor local

  for (let estado in faturamentoMensal) {
    const percentual = ((faturamentoMensal[estado] / totalFaturamento) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  }