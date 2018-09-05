import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { Button } from './components/Button'

function App({<%= oni.fileName %>,dispatch}) {
    const { text } = <%= oni.fileName %>;
    const changetext=()=>dispatch({type:"<%= oni.fileName %>/fetch"});
    return (
        <View>
            <Text>
                {text}
            </Text>
            <Button onPress={changetext} ><Text>click</Text> </Button>
        </View>
    );
}
export default connect(({<%= oni.fileName %>})=>({<%= oni.fileName %>}))(App);
