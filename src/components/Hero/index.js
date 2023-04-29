import React from 'react'

import './index.scss'

const Hero = () => {
  return (
    <div className="hero-container">
      <>
        <video playsInline autoPlay muted loop id="bgvid">
          <source
            src="https://shootime.s3.eu-west-2.amazonaws.com/videobg-2.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCWV1LXdlc3QtMiJIMEYCIQCZE3KE3JLMdpwRyMicvUS1wBp%2BV1xuZpCPa%2BFkHSfcoAIhAPYMUJK0vlj6GAy4fCAHov%2FTcdMuEu6WZeNdUsm4SX2NKuQCCH4QAxoMMDk1OTg4NzAxMjQ1IgyEsV1PUAZEmjxcKw0qwQKqAAVhQ4XItcRnuCRhc2VaTSvGHbFlcZFg2YEpzHRo19wTLuF77vsxUqudrW9COBREpCyLih5lrdHritNDQ1afxBNIULwq4u0WQ1vKGyURjtPr8EvqdB%2B8%2FbJnaQXUpSDknX4FwrKwE9RITGw6ojcpsc%2B24SopzAPX5m2p7Txis8od6UZu4PHC6zP0qgURDuyMJzPbTq%2FYgnVFDH8VJhAQgYnJo1FQXNxaM1hWDWxNJAoK5JE%2FlNt6NvBdppNR2Y6hVogjjhfrrryGS3DAsDqkkg1tJ6oOyNgAdGwKHGNq9yvz3soznTzZZrJlJvOX8hk0JYgXhef5AX1IPHM5CqWbTT30MqHIb2SwHmgC9tQluSSa66aLVQ%2FcEZ1JViCF7oGGHKhJYZ3MRT8djpN9vUn%2FdLHm8WAEeZOGONwneH0W4LMw4Yq2ogY6sgLmjXSdFrvqYlPiQp%2FBf6qjlVBYvs%2Fs6EOdwjTdpqATA0mvy3Bgm394hl6EzhJWku2yynflwv7V8wLc1Ccb0F%2BnH6frWyjUTBQ%2FcQiJp8rWG7gbMy7QcFgolk9Vtd9b8JJfYbhW%2BLJTAlcsemn%2FKNC3GQW8B4GPoPbfb4PrN1RihJT0C5LsVgJE%2B7iy1anSnzJdPdx1kJTJAGkZdS66zRATcsTp2Y5%2F0bYP7xkUW4Rjj1d9kiPfVW9GIaw0bhH8A4rqJdth9dZpEIcdx2An6GQaBgU2ShEAAHghHoFsOAz6DVgMTSW3bu2iby3rjq2UNYGf%2BhxfFnMfUrkoaGDxsD9iL6H5jZSeJwozoE%2F0jLY%2BHB2cCjTO4ve7NT5kR11%2BiW0flOSf6pd9l5LOa7fw%2BtW28Js%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230429T210257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARMWK7LA62W7ERKOB%2F20230429%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=32198db5a5c24a02b89825bdd63ea932c577ab8fa9c03ab2f7db945d657ff0fb"
            type="video/mp4"
          />
        </video>
      </>
      <h1>We make your world 360</h1>
      <p>
        London based company, Shootime Ltd is specialised in 360 photography, 3D
        digital twins and EPC.
      </p>
      <p>
        Established in 2022 the company has a team of professionals with a
        strong background in photography, construction, architectural survey and
        project management.
      </p>
      <button>GET A QUOTE</button>
    </div>
  )
}

export default Hero
