function status(request, response) {
  //response.status(200).send("Eu sou acima da media");
  //nao assume o charset utf-8
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
