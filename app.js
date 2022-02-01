const skills = document.querySelectorAll('.skill');
const skills_all = document.querySelector('.all-skills');

skills.forEach( skill => {

    skill.addEventListener('change', function(){
        let all_data = document.querySelectorAll('.skill:checked');

        let skills_arr = [];

        all_data.forEach(data => {
            skills_arr.push(data.value);
        });
        let list = '';
        skills_arr.map(data => {
            list += `<li class="list-group-item">${data}</li>`;
        });
        skills_all.innerHTML = list;
    });
});