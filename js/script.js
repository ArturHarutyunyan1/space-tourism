const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const planetImage = document.querySelector('.planet-image')
const technologyImage = document.querySelector('.technology-img')
const specialistImage = document.querySelector('.specialist')
const planetImages = ['./img/destination/image-moon.png','./img/destination/image-mars.png','./img/destination/image-europa.png','./img/destination/image-titan.png']
const specialistImages = ['./img/crew/image-douglas-hurley.png', './img/crew/image-mark-shuttleworth.png', './img/crew/image-victor-glover.png', './img/crew/image-anousheh-ansari.png']
const technologyImages = ['./img/technology/image-launch-vehicle-portrait.jpg', './img/technology/image-spaceport-portrait.jpg','./img/technology/image-space-capsule-portrait.jpg']
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('visible')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active-button')
    })
    if(target.id == 'moon'){
        planetImage.src = planetImages[0]
    }else if(target.id == 'mars'){
        planetImage.src = planetImages[1]
    }else if(target.id == 'europa'){
        planetImage.src = planetImages[2]
    }else if(target.id == 'titan'){
        planetImage.src = planetImages[3]
    }
    if(target.id == 'commander'){
      specialistImage.src = specialistImages[0]
    }else if(target.id == 'specialist'){
      specialistImage.src = specialistImages[1]
    }else if(target.id == 'pilot'){
      specialistImage.src = specialistImages[2]
    }else if(target.id == 'engineer'){
      specialistImage.src = specialistImages[3]
    }
    if(target.id == 'vehicle'){
      technologyImage.src = technologyImages[0]
    }else if(target.id == 'spaceport'){
      technologyImage.src = technologyImages[1]
    }else if(target.id == 'capsule'){
      technologyImage.src = technologyImages[2]
    }
    tab.classList.add('active-button')
    target.classList.add('visible')
  })
})
