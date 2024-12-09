class AppController {
  static getHomePage(request, response) {
    response.status(200);
    response.send('Hello ALX');
  }
}

export default AppController;
