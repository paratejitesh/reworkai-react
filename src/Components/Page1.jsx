

function Page1() {
  return (
    <>

      <nav class=" m-3 pr-0 md:flex md:items-center md:justify-between  ">


        <div class="flex justify-between items-center " >
          <label class="text-purple-900 border-2 border-purple-900 pl-3 md:pl-20md:text-4xl text-4xl rounded-l-xl rounded-t-xl cursor-pointer" > re <span class="bg-purple-800 pr-3 text-white">work <sub>ai</sub></span></label>

          <span class=" text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu " onclick="Menu(this)"></ion-icon>

          </span>

        </div>
        <ul class="md:flex md:items-center z-1-bg-slate-300 bg-white md:z-auto md:static absolute w-full left-0 md:w-auto
            md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] 
            transition-all ease-in duration-500 ">
          <li class="mx-3 my-4 md:my-0" ><a href="#" class="text-xl hover:text-purple-950 duration-500  "> Talent Finder</a></li>
          <li class="mx-3 my-4 md:my-0" ><a href="#" class="text-xl hover:text-purple-950 duration-500 ">  For Recruiters</a></li>
          <li class="mx-3 my-4 md:my-0" ><a href="#" class="text-xl hover:text-purple-950 duration-500 ">  For Eempolyer</a></li>
          <li class="mx-3 my-4 md:my-0" ><a href="#" class="text-xl hover:text-purple-950 duration-500 "> About us</a></li>
          <li class="mx-3 my-4 md:my-0" ><a href="#" class="text-xl hover:text-purple-950 duration-500 "> Companey</a></li>

          <button class=" border-2 border-purple-900 text-purple-900 duration-500 px-10 py-1 mx-4 rounded-xl hover:bg-purple-900 hover:text-white hover:shadow-purple-200">Log In</button>

          <button class=" border-2 border-purple-900 text-purple-900 duration-500 px-10 py-1 mx-4 rounded-xl hover:bg-purple-900 hover:text-white hover:shadow-purple-200"> Get Started </button>
        </ul>

      </nav>

      <div className="m-5 mt-5 w-full max-w-[1313px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto text-sm text-violet-800 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Power Up Your{" "}
                </span>
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Hiring
                </span>
                <br />
                <span className="text-5xl text-violet-800  leading-[67px]">
                  with Rework .
                </span>
              </div>
              <div className="self-stretch mt-2.5 leading-6 text-zinc-900 max-md:max-w-full">
                Empower your business with cutting-edge A.I. technology,
                simplified processes, and top-tier talent connections. Rework is
                your strategic partner in redefining how you hire{" "}
              </div>

              <button class=" border-2 border-purple-900 text-3xl mt-5 text-purple-900 duration-500 px-20 py-3 mx-8 rounded-xl hover:bg-purple-900 hover:text-white hover:shadow-purple-400"> Book A Demo</button>


              <div className="flex gap-2.5 py-2 mt-7 rounded-xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/215a4dd1890a3090e604259eb749a8f9034271bdcc791c35a540f510de6b4169?apiKey=ead5d76c18e04a448d3a9457e1269ab9&"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>No credit Required</div>
              </div>
              <div className="flex gap-2.5 py-2 rounded-xl">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/215a4dd1890a3090e604259eb749a8f9034271bdcc791c35a540f510de6b4169?apiKey=ead5d76c18e04a448d3a9457e1269ab9&"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>Streamlined Recruitment Process</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d305cdc9760c979dec40f15fee34113dd03437275395a34c5ac87c3cfc9ac0de?apiKey=ead5d76c18e04a448d3a9457e1269ab9&"
              className="grow w-full rounded-full aspect-[1.23] max-md:max-w-full"
            />
          </div>
        </div>
      </div>




    </>
  );
}
export default Page1;
