import React , { Component} from 'react';
import { View, Text} from 'react-native';
import { Card } from 'react-native-elements';

export default class Produtos extends Component{
    
    render (){
        return(
            <View>
                <Card>
                    <Card.Title>{this.props.data.description}</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={this.props.data.image}></Card.Image>

                    <Text style={{marginBottom: 10}}>
                        {this.props.data.category}
                    </Text>

                </Card>
                
            </View>
        )
    }
}
