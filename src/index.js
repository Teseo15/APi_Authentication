import app from "./app";
import './database';

app.listen(app.get("port"));

console.log("Server on portaaaa", app.get('port'));

