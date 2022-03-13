# Personal Portfolio

A showcase of my learning proccess and some of my abilities.  
It is fully `responsive` using [MUI](https://mui.com/) library.  
Each section details is fetched from local files using async `axios` calls.  
All axios calls are made from `DAL file` (Data Access Layer). which means there are no API links inside the components.  
To update and section of the portfolio, all you need is to update the required JSON file.  
  
Icons are imported from `@fortawesome/react-fontawesome` in mapping file and exported to use all over the project.
to be able to use Font Awesome I had to search for the desired icon in [FontAwesome](https://fontawesome.com/search) like 'linkedin':  
got this result: 
```sh 
<FontAwesomeIcon icon="fa-brands fa-linkedin" />
```
and I needed to convert it to React compatibility, so it looked like this:
```sh 
<FontAwesomeIcon icon={faLinkedin}/>
```
 - Notice the 'brands' as Font Awesome has divided their Icons into sections.  
    And you need to install it separately.

  
The styling is done with an external file of [MUI Theming](https://mui.com/customization/theming/).
  
  
### View this protfolio live on:
[Saif's portfilio](preview)
> The portfolio is not completed yet


