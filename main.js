var launches = document.getElementById("launches")
var launchesLink = document.getElementById("launches-link")
var spaceToday = document.getElementById("today-in-space")
var spacelink = document.getElementById("space-link")
var launchesImg = document.getElementById("launches-img")

launchesLink.addEventListener("click",function(){
    launches.classList.remove("hidden")
    spaceToday.classList.add("hidden")
    launchesLink.classList.add("bg-blue-500/10")
    launchesLink.classList.replace("text-slate-300","text-blue-400")
    spacelink.classList.remove("bg-blue-500/10")
    spacelink.classList.replace("text-blue-400","text-slate-300")
    // var response =await fetch(`https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10`)
    // var x = await response.json()
    // container=` <div class="relative">
    //               <div
    //                 class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
    //               >
    //                 <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
    //                 <div
    //                   class="flex items-center justify-center h-full min-h-[400px] bg-slate-800"
    //                 >
    //                   <i class="fas fa-rocket text-9xl text-slate-700/50"></i>
    //                 </div>
    //                 <div
    //                   class="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent"
    //                 ></div>
    //               </div>
    //             </div>`;
    //  launchesImg.innerHTML=container
})

spacelink.addEventListener("click",async function(){
    launches.classList.add("hidden")
    spaceToday.classList.remove("hidden")
    launchesLink.classList.remove("bg-blue-500/10")
    launchesLink.classList.replace("text-blue-400","text-slate-300")
    spacelink.classList.add("bg-blue-500/10")
    spacelink.classList.replace("text-slate-300","text-blue-400")
    try{
var response =await fetch(`https://api.nasa.gov/planetary/apod?api_key=YpMtEncXxouFQ06kTU92TWCIjQF69ogL1ZqabubO`)
    var x = await response.json()
    console.log(x)
    console.log(x.explanation)
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
                  &copy;${x.copyright}
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
              document.querySelector(".homeimg").innerHTML=container
    }catch(error){
       console.error(error);
    }
    
})