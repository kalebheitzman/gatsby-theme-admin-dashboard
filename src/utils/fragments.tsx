// import libs
import { graphql } from "gatsby"

// export const FlightAircraftFragment = graphql`
//   fragment FlightAircraft on MarkdownRemark {
//     html
//     frontmatter {
//       title
//       templateKey
//       icao
//       performance {
//         maxCruise
//         maxRange
//         maxAltitude
//         climbProfile
//         climbRate
//       }
//       image {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// export const FlightFragment = graphql`
//   fragment Flight on MarkdownRemark {
//     id
//     html
//     frontmatter {
//       title
//       routeCode
//       slug
//       summary
//       charts {
//         label
//         url
//       }
//       flightPlan {
//         flightPlan
//         windyUrl
//         aircraftIcao
//         arrivalIcao
//         departureIcao
//         alternateIcao
//         distance
//         flightTime
//         route
//         sid
//         star
//         flightPlanId
//         flightPlanJson
//         routePolyline
//       }
//       image {
//         childImageSharp {
//           fluid(
//             quality: 90
//             maxWidth: 4160
//             duotone: { highlight: "#9f56a2", shadow: "#976199", opacity: 80 }
//           ) {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//     fields {
//       aircraft {
//         ...FlightAircraft
//       }
//       arrival {
//         ident
//         name
//         lat
//         lon
//       }
//       departure {
//         ident
//         name
//         lat
//         lon
//       }
//       route {
//         ident
//         name
//         lat
//         lon
//         type
//       }
//     }
//   }
// `
