import React from 'react'

const MainFooter = () => {
  return (
        <footer class="pro-grey text-white p-10">
        <div class="flex justify-between">
          <p class="text-sm">
            <title1 class="text-3xl">Pricing</title1><br />
            <br />Revolute is almost done in the making
            <br />if u want to get ripped off come and get one of these cheeky bois for like 70usd
            <br />check dev process on the github repos and documentations if you care to</p>
          <div class="flex flex-col space-y-2 place-content-center">
            <a href="https://documentation.tongtonginc.com" class="flex items-center pr-4 max-h-16">
                <i class="fab fa-docs">documentations</i>
                <img src="./img/documentations.png" alt="" class="h-6 w-6 ml-2"></img>
              </a>
              <a href="https://github.com/tongtongwang86/Revolute" class="flex items-center pr-4 max-h-16">
                <i class="fab fa-github">github repos</i>
                <img src="./img/github.png" alt="" class="h-6 w-6 ml-2"></img>
              </a>
              <a href="mailto: tongtong@tongtonginc.com" class="flex items-center max-h-16">
                <i class="fab fa-email">email</i>
                <img src="./img/email.png" alt="" class="h-6 w-6 ml-2"></img>
              </a>
          </div>
        </div>
      </footer>
  )
}

export default MainFooter