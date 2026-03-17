const API_KEY = "AIzaSyAwAa__ZqqafORS-FX4y9B3-KQXenOOYug"

async function generateScript(){

const topic = document.getElementById("topic").value
const result = document.getElementById("result")
const loading = document.getElementById("loading")

if(!topic){
alert("Nhập chủ đề video")
return
}

loading.style.display="block"
result.value=""

const prompt = `Viết kịch bản video ngắn về: ${topic}.
Bao gồm:
- Hook mở đầu
- Nội dung chính
- Kết thúc`

try{

const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[
{
parts:[
{ text: prompt }
]
}
]

})

})

const data = await response.json()

const text = data.candidates[0].content.parts[0].text

result.value = text

}catch(error){

result.value="Lỗi khi gọi AI"

}

loading.style.display="none"

}

function copyScript(){

const text = document.getElementById("result")

text.select()
document.execCommand("copy")

alert("Đã copy kịch bản")

}