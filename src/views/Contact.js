import React from 'react'
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
      <>
      <h1 className = 'contact'>Contact Page</h1>
      <section class="contact-section bg-white">
          <div class="container px-4 px-lg-5">
              <div class="row gx-4 gx-lg-5">
                  <div class="col-md-4 mb-3 mb-md-0">
                      <div class="card py-4 h-100">
                          <div class="card-body text-center">
                              <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                              <h4 class="text-uppercase m-0">Email</h4>
                              <hr class="my-4 mx-auto" />
                              <div class="text-white">email@email.com</div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                      <div class="card py-4 h-100">
                          <div class="card-body text-center">
                              <h4 class="text-uppercase m-0">Phone</h4>
                              <hr class="my-4 mx-auto" />
                              <div class="text-white">(678) 999-8212</div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 mb-3 mb-md-0">
                      <div class="card py-4 h-100">
                          <div class="card-body text-center">
                              <h4 class="text-uppercase m-0">Data</h4>
                              <hr class="my-4 mx-auto" />
                                  <div class="text-white"><a href="https://www.cloudbet.com/api/">Cloudbet</a></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div id ="icons" class="d-flex justify-content-center">
                <SocialIcon className ="one" url="https://www.linkedin.com/in/michael-amerio-4b720b187/" fgColor="white"/>
                <SocialIcon className="two" url="https://www.github.com/maamerio24/" network="github" fgColor="white"/>
                <SocialIcon className="three" url="https://www.stackoverflow.com/" fgColor="white" />
              </div>
          </div>
      </section>
      </>
  )
}
