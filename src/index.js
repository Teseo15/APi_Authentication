import app from "./app";
import './database';

app.listen(app.get("port"));

console.log("Server on port", app.get('port'));

console.log('http://localhost:5000/api/obra');