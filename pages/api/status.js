function status(request, response) {
  response.status(200).json({ status: "Sucesso" });
}

export default status;
