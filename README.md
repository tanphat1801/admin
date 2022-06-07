# pharmacy

cach dung git

git clone -b my-branch git@github.com:user/myproject.git

git init
git add .
git commit -m "first commit" → phai co
git branch -M main -> optional
git remote add origin <url>
git push -u origin main

function confirmRemoval(id) {
$('#confirm-removal-modal').modal({show: true}); $('#delete-btn').click(async
function() { const response = await fetch("http://localhost:3000/admin/users/" + id, { method: 'DELETE'}) }); }
