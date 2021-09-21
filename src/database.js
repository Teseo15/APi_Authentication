import  mongoose  from 'mongoose';
mongoose.connect("mongodb+srv://teseo55:admin123@mini-merm.1oegf.mongodb.net/pruebas",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
    .then(db => console.log('Db is connected'))
    .catch(error=>console.log(error))

