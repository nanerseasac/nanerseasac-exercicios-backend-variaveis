const desconto = (meu_dinheiro, valor_total) => {
	const valorDesconto = valor_total - meu_dinheiro;
	const porcentagem = (valorDesconto / valor_total) * 100;
	return `${valor_total} reais representa 100% do valor, quantos porcento equivale a ${meu_dinheiro} reais?"_ Esse valor é obtido em ${porcentagem.toFixed(
		0
	)}%`;
};

console.log(desconto(80.0, 129.99));
