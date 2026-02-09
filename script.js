const data = {
  name: 'Rizky Cristian Sihombing',
  title: 'Mahasiswa Chill dan Santai',
  about: 'Saya adalah mahasiswa teknologi informasi di Universitas Sumatera Utara. Melalui pendidikan di universitas ini, saya ingin menjadi orang yang terampil dan memiliki kemampuan yang memadai untuk pekerjaan saya dimasa mendatang',
  email: ['ikkysihombing1234@gmail.com', 'rizkycristian@students.usu.ac.id'],
  phone: '082174151896',
  linkedin: '-',
  education: ['S1 Teknologi Informasi - Universitas Sumatera Utara (2025 - sekarang)', 'SMAN 1 Lintongnihuta (2022 - 2025)', 'SMPN 1 Lintongnihuta (2019 - 2022)', 'SD Swasta 1 HKBP Lintongnihuta'],
  skills: ['HTML', 'CSS', 'C', 'C++'],
  hobies: ['Racing Gaming', 'Soccer'],
  projects: [
    {
      name: 'Website Portfolio',
      description: 'Website pribadi untuk menampilkan proyek & tugas.',
    },
  ],
}

// Set basic info
document.getElementById('name').textContent = data.name
document.getElementById('title').textContent = data.title
document.getElementById('about').textContent = data.about
document.getElementById('email').textContent = data.email
document.getElementById('phone').textContent = data.phone
document.getElementById('linkedin').textContent = data.linkedin

// Education
const eduList = document.getElementById('education')
data.education.forEach((item) => {
  const li = document.createElement('li')
  li.textContent = item
  eduList.appendChild(li)
})

// Skills
const skillList = document.getElementById('skills')
data.skills.forEach((skill) => {
  const li = document.createElement('li')
  li.textContent = skill
  skillList.appendChild(li)
})

// hobies
const hobieList = document.getElementById('hobies')
data.hobies.forEach((hobie) => {
  const li = document.createElement('li')
  li.textContent = hobie
  hobieList.appendChild(li)
})

// Projects
const projectContainer = document.getElementById('projects')
data.projects.forEach((project) => {
  const div = document.createElement('div')
  div.classList.add('project')
  div.innerHTML = `<strong>${project.name}</strong><p>${project.description}</p>`
  projectContainer.appendChild(div)
})

// Footer year
document.getElementById('year').textContent = new Date().getFullYear()
