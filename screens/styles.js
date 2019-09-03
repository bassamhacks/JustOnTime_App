const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    marginTop: '20%',
    justifyContent:'center'
  },
  logo: {
    width: 230,
    height: 250,
  },
  container: {
    justifyContent: 'center',
},
itemStyleLogin: {
  borderBottomWidth: 0, 
  justifyContent:'center',
  marginTop:'10%'
},
itemStyleLogo: {
  borderBottomWidth: 0, 
  justifyContent:'center'
}
}
