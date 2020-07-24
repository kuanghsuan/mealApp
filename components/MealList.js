import React from 'react';
import { View,FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';
const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const renderMealItem = itemData => {
      const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            image={itemData.item.imageUrl}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: "MealDetail",
                params: {
                  mealId: itemData.item.id,
                  mealTitle: itemData.item.title,
                  isFav: isFavorite,
                },
              });
            }}
          />
        );
    }
return (
  <View>
    <FlatList
      style={styles.list}
      keyExtractor={(item, index) => item.id}
      data={props.listData}
      renderItem={renderMealItem}
      style={{ width: "100%" }}
    />
  </View>
);
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default MealList;