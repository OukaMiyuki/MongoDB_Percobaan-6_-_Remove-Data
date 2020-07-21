const mongoose = require('mongoose');

//database connection
const mongoDB = 'mongodb://localhost/playground';
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB Server : ', err));

//Create database schema
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
}); 

const Course = mongoose.model('Course', courseSchema); //if you wondering how can you get the name of the table check in this line

async function createCourse(){
    try{
        const course = new Course({
            name: 'Angular Course',
            author: 'Ouka Miyuki',
            tags: ['Angular', 'frontend'],
            isPublished: true
        });
    
        const result = await course.save();
        console.log(result);
    } catch(err){
        console.log('There\'s an error : ', err.message);
    }
}

//Delete one data
async function deleteData(id){
    const result = await Course.deleteOne( { _id: id } );
    
    //to get data that has been deleted log in a console
    //const course  = await Course.findByIdAndRemove(id);

    console.log(course);
}

//you can use another property to delete the data, but don't forget to set unique constraint to the delete property
//Check here https://stackoverflow.com/questions/47064163/mongodb-mongoose-make-emailid-unique-field
//also here https://docs.mongodb.com/manual/tutorial/unique-constraints-on-arbitrary-fields/
deleteData('5f1494859077cd33884ba3e1');