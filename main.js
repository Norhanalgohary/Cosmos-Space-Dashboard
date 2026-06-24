var launches = document.getElementById("launches")
var launchesLink = document.getElementById("launches-link")
var planets = document.getElementById("planets")
var planetsLink = document.getElementById("planets-link")
var spaceToday = document.getElementById("today-in-space")
var spacelink = document.getElementById("space-link")
var launchesImg = document.getElementById("launches-img")
// var dateInput = document.getElementById("apod-date-input");
// var dateLable = document.querySelector(".date-input-wrapper")
// var datespan = document.querySelector(".document.querySelector("date-input-wrapper")")
var loadbtn = document.getElementById("load-date-btn")
// var homeImg= document.querySelector(".homeimg")
var mercury = document.getElementById("mercury")
var desc = document.querySelector(".planetDesc")
var meas = document.querySelector(".planetMeasers")
var dicovInfo = document.querySelector(".dicovInfo")
var qiuckFacts = document.querySelector(".qiuckFacts")
var orbitChar = document.querySelector(".orbitChar")


launchesLink.addEventListener("click",function(){
    if(!spaceToday.classList.contains("hidden")){
      launches.classList.remove("hidden")
    spaceToday.classList.add("hidden")
    launchesLink.classList.add("bg-blue-500/10")
    launchesLink.classList.replace("text-slate-300","text-blue-400")
    spacelink.classList.remove("bg-blue-500/10")
    spacelink.classList.replace("text-blue-400","text-slate-300")
    }else if (!planets.classList.contains("hidden")){
      launches.classList.remove("hidden")
    planets.classList.add("hidden")
    launchesLink.classList.add("bg-blue-500/10")
    launchesLink.classList.replace("text-slate-300","text-blue-400")
    planetsLink.classList.remove("bg-blue-500/10")
    planetsLink.classList.replace("text-blue-400","text-slate-300")
    }
})


planetsLink.addEventListener("click",function(){
  if(!spaceToday.classList.contains("hidden")){
    planets.classList.remove("hidden")
    spaceToday.classList.add("hidden")
    planetsLink.classList.add("bg-blue-500/10")
    planetsLink.classList.replace("text-slate-300","text-blue-400")
    spacelink.classList.remove("bg-blue-500/10")
    spacelink.classList.replace("text-blue-400","text-slate-300")
    }else if (!launches.classList.contains("hidden")){
      planets.classList.remove("hidden")
    launches.classList.add("hidden")
    planetsLink.classList.add("bg-blue-500/10")
    planetsLink.classList.replace("text-slate-300","text-blue-400")
    launchesLink.classList.remove("bg-blue-500/10")
    launchesLink.classList.replace("text-blue-400","text-slate-300")
    }
})

async function load() {
    try {
        const response = await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=YpMtEncXxouFQ06kTU92TWCIjQF69ogL1ZqabubO"
        );

        const x = await response.json();

         var container=`
    <div class="xl:col-span-2 ">
              <div
                id="apod-image-container"
                class="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px] bg-slate-800/50 flex items-center justify-center"
              >
                <div id="apod-loading" class="text-center hidden">
                  <i
                    class="fas fa-spinner fa-spin text-4xl text-blue-400 mb-4"
                  ></i>
                  <p class="text-slate-400">Loading today's image...</p>
                </div>
                <!-- Using a placeholder image or one from assets if available. Using a reliable external placeholder for now or a relative path if we knew one. Sticking to a colored placeholder div if no image, but let's try a realistic placeholder or just the rocket icon style used elsewhere if we want to be safe. But user wants design. I'll use a relative path assuming assets exist or a generic space placeholder. -->
                <img
                  id="apod-image"
                  class="w-full h-full object-cover"
                  src="${x.url}"
                  alt="Astronomy Picture of the Day"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div class="absolute bottom-6 left-6 right-6">
                    <button
                      class="w-full py-3 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-white/20 transition-colors"
                    >
                      <i class="fas fa-expand mr-2"></i>View Full Resolution
                    </button>
                  </div>
                </div>
              </div>
            </div>
            



            <div class="space-y-4 md:space-y-6">
              <div
                class="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6"
              >
                <h3
                  id="apod-title"
                  class="text-lg md:text-2xl font-semibold mb-3 md:mb-4"
                >
                 ${x.title}
                </h3>
                <div
                  class="flex items-center space-x-4 mb-4 text-sm text-slate-400"
                >
                  <span id="apod-date-detail"
                    ><i class="far fa-calendar mr-2"></i>${x.date}</span
                  >
                </div>
                <p
                  id="apod-explanation"
                  class="text-slate-300 leading-relaxed mb-4"
                >
                 ${x.explanation}
                </p>
                <div
                  id="apod-copyright"
                  class="text-xs text-slate-400 italic mb-4"
                >
                   &copy;
                </div>
              </div>
              <div
                class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
              >
                <h4 class="font-semibold mb-3 flex items-center">
                  <i class="fas fa-info-circle text-blue-400 mr-2"></i>
                  Image Details
                </h4>
                <div class="space-y-3 text-sm">
                  <div class="flex justify-between">
                    <span class="text-slate-400">Date</span>
                    <span id="apod-date-info" class="font-medium"
                      >${x.date}</span
                    >
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Media Type</span>
                    <span id="apod-media-type" class="font-medium">Image</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Source</span>
                    <span class="font-medium">NASA APOD</span>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            `
        document.querySelector(".homeimg").innerHTML = container;
    } catch (error) {
        console.error(error);
    }
}

spacelink.addEventListener("click", function () {
if (!launches.classList.contains("hidden")){
    launches.classList.add("hidden");
    spaceToday.classList.remove("hidden");

    launchesLink.classList.remove("bg-blue-500/10");
    launchesLink.classList.replace("text-blue-400", "text-slate-300");

    spacelink.classList.add("bg-blue-500/10");
    spacelink.classList.replace("text-slate-300", "text-blue-400");
}else if (!planets.classList.contains("hidden")){
      spaceToday.classList.remove("hidden")
    planets.classList.add("hidden")
    spacelink.classList.add("bg-blue-500/10")
    spacelink.classList.replace("text-slate-300","text-blue-400")
    planetsLink.classList.remove("bg-blue-500/10")
    planetsLink.classList.replace("text-blue-400","text-slate-300")
    }

    load();
});

load();
loadbtn.addEventListener("click", async function () {
  try {
    
    const dateInput = document.querySelector("#apod-date-input");
    const dateLable = document.querySelector(".datespan");
    const homeImg = document.querySelector(".homeimg");

    
    const currentdate =dateInput.value
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=YpMtEncXxouFQ06kTU92TWCIjQF69ogL1ZqabubO&date=${currentdate}`
    );


    const x = await response.json();
    console.log(x);

    let mediaHTML = "";

    if (x.media_type === "image") {
      mediaHTML = `
        <img
          id="apod-image"
          class="w-full h-full object-cover"
          src="${x.url}"
          alt="Astronomy Picture of the Day"
        />
      `;
    } else {
      mediaHTML = `
        <iframe
          class="w-full h-full"
          src="${x.url}"
          frameborder="0"
          allowfullscreen
        ></iframe>
      `;
    }

    const container = `
      <div class="xl:col-span-2">
        <div class="relative rounded-2xl overflow-hidden group h-[300px] md:h-[400px] lg:h-[600px] bg-slate-800/50 flex items-center justify-center">
          ${mediaHTML}
        </div>
      </div>

      <div class="space-y-4 md:space-y-6">
        <div class="bg-slate-800/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-6">
          <h3 class="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
            ${x.title}
          </h3>

          <div class="flex items-center space-x-4 mb-4 text-sm text-slate-400">
            <span>
              <i class="far fa-calendar mr-2"></i>${x.date}
            </span>
          </div>

          <p class="text-slate-300 leading-relaxed mb-4">
            ${x.explanation}
          </p>

          <div class="text-xs text-slate-400 italic mb-4">
            &copy; ${x.copyright}
          </div>
        </div>
       <div
                class="bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
              >
                <h4 class="font-semibold mb-3 flex items-center">
                  <i class="fas fa-info-circle text-blue-400 mr-2"></i>
                  Image Details
                </h4>
                <div class="space-y-3 text-sm">
                  <div class="flex justify-between">
                    <span class="text-slate-400">Date</span>
                    <span id="apod-date-info" class="font-medium"
                      >${x.date}</span
                    >
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Media Type</span>
                    <span id="apod-media-type" class="font-medium">Image</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-slate-400">Source</span>
                    <span class="font-medium">NASA APOD</span>
                  </div>
                </div>
              </div>
            </div>
    `;

   
    homeImg.innerHTML = container;

    dateLable.textContent = currentdate;
  } catch (err) {
    console.log( err.message);
  }
});

mercury.addEventListener("click",async function(){
  const response = await fetch("https://solar-system-opendata-proxy.vercel.app/api/planets")
  const x = await response.json()
   console.log(x);
 
     var container=` <div
                  class="relative h-48 w-48 md:h-64 md:w-64 shrink-0 mx-auto xl:mr-6"
                >
                  <img
                    id="planet-detail-image"
                    class="w-full h-full object-contain"
                    src=${x.bodies[4].image}
                    alt="earth planet detailed realistic render with clouds and continents"
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-3 md:mb-4">
                    <h3
                      id="planet-detail-name"
                      class="text-2xl md:text-3xl font-space font-bold"
                    >
                      ${x.bodies[4].englishName}
                    </h3>
                    <button
                      class="w-10 h-10 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <i class="far fa-heart"></i>
                    </button>
                  </div>
                  <p
                    id="planet-detail-description"
                    class="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
                  >
                    ${x.bodies[4].description}
                  </p>
                </div>`
                desc.innerHTML=container
                var container2=`
                <div class="bg-slate-900/50 rounded-lg p-3 md:p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-ruler text-xs"></i>
                    <span class="text-xs">Semimajor Axis</span>
                  </p>
                  <p
                    id="planet-distance"
                    class="text-sm md:text-lg font-semibold"
                  >
                   ${x.bodies[4].semimajorAxis} km
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-circle"></i>
                    Mean Radius
                  </p>
                  <p id="planet-radius" class="text-lg font-semibold">
                    ${x.bodies[4].meanRadius} km
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-weight"></i>
                    Mass
                  </p>
                  <p id="planet-mass" class="text-lg font-semibold">
                    ${x.bodies[4].mass.massValue}× 10^23 kg
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-compress"></i>
                    Density
                  </p>
                  <p id="planet-density" class="text-lg font-semibold">
                    ${x.bodies[4].density} g/cm³
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-sync-alt"></i>
                    Orbital Period
                  </p>
                  <p id="planet-orbital-period" class="text-lg font-semibold">
                    ${x.bodies[4].sideralOrbit} days
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-redo"></i>
                    Rotation Period
                  </p>
                  <p id="planet-rotation" class="text-lg font-semibold">
                    ${x.bodies[4].sideralRotation} hours
                  </p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-moon"></i>
                    Moons
                  </p>
                  <p id="planet-moons" class="text-lg font-semibold">${x.bodies[4].moons}</p>
                </div>
                <div class="bg-slate-900/50 rounded-lg p-4">
                  <p
                    class="text-xs text-slate-400 mb-1 flex items-center gap-1"
                  >
                    <i class="fas fa-arrows-alt-v"></i>
                    Gravity
                  </p>
                  <p id="planet-gravity" class="text-lg font-semibold">
                    ${x.bodies[4].gravity} m/s²
                  </p>
                </div>
                `
                meas.innerHTML=container2

                var container3=` <h4 class="font-semibold mb-4 flex items-center">
                  <i class="fas fa-user-astronaut text-purple-400 mr-2"></i>
                  Discovery Info
                </h4>
                <div class="space-y-3 text-sm">
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Discovered By</span>
                    <span
                      id="planet-discoverer"
                      class="font-semibold text-right"
                      >Known since antiquity</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Discovery Date</span>
                    <span id="planet-discovery-date" class="font-semibold"
                      >Ancient</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Body Type</span>
                    <span id="planet-body-type" class="font-semibold"
                      >Planet</span
                    >
                  </div>
                  <div class="flex justify-between items-center py-2">
                    <span class="text-slate-400">Volume</span>
                    <span id="planet-volume" class="font-semibold">${x.bodies[4].vol.volValue}</span>
                  </div>`
                  dicovInfo.innerHTML=container3

                  var container4=` <h4 class="font-semibold mb-4 flex items-center">
                  <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                  Quick Facts
                </h4>
                <ul id="planet-facts" class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                    <span class="text-slate-300"
                      >Mass: ${x.bodies[4].mass.massValue} × 10^23 kg</span
                    >
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                    <span class="text-slate-300"
                      >Surface gravity: ${x.bodies[4].gravity} m/s²</span
                    >
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                    <span class="text-slate-300"
                      >Density:${x.bodies[4].density} g/cm³</span
                    >
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-400 mt-1 mr-2"></i>
                    <span class="text-slate-300"
                      >Axial tilt:${x.bodies[4].axialTilt}°</span
                    >
                  </li>
                </ul>`
                  qiuckFacts.innerHTML=container4

                  var container5=`<h4 class="font-semibold mb-4 flex items-center">
                  <i class="fas fa-satellite text-blue-400 mr-2"></i>
                  Orbital Characteristics
                </h4>
                <div class="space-y-3 text-sm">
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Perihelion</span>
                    <span id="planet-perihelion" class="font-semibold"
                      >${x.bodies[4].perihelion}M km</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Aphelion</span>
                    <span id="planet-aphelion" class="font-semibold"
                      >${x.bodies[4].aphelion}M km</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Eccentricity</span>
                    <span id="planet-eccentricity" class="font-semibold"
                      >${x.bodies[4].eccentricity}</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Inclination</span>
                    <span id="planet-inclination" class="font-semibold"
                      >${x.bodies[4].inclination}°</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Axial Tilt</span>
                    <span id="planet-axial-tilt" class="font-semibold"
                      >${x.bodies[4].axialTilt}°</span
                    >
                  </div>
                  <div
                    class="flex justify-between items-center py-2 border-b border-slate-700"
                  >
                    <span class="text-slate-400">Avg Temperature</span>
                    <span id="planet-temp" class="font-semibold">N/A</span>
                  </div>
                  <div class="flex justify-between items-center py-2">
                    <span class="text-slate-400">Escape Velocity</span>
                    <span id="planet-escape" class="font-semibold"
                      >${x.bodies[4].escape} km/s</span
                    >
                  </div>
                </div>`
                  orbitChar.innerHTML=container5
})








