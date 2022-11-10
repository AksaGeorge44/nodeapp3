var mongoose=require('mongoose')




var studentSchema=new mongoose.Schema(
{
    name:{type:String,required:true},
    roll:{type:Number,required:true},
    admno:{type:Number,required:true},
    college:{type:String,required:true},

}



);
var studentModel=mongoose.model('students',studentSchema);
module.exports={studentModel}
