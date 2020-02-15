import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Nested = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.container1}>
          <View style={styles.middleView1}>
            <View style={styles.innerView1}></View>
          </View>
          <View style={styles.middleView2}>
            <View style={styles.innerView2}></View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.middleView3}>
            <View style={styles.innerView3}></View>
          </View>
          <View style={styles.middleView4}>
            <View style={styles.innerView4}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Some CSS help was feasible by using this website  "https://yogalayout.com/playground/?eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwibWluV2lkdGgiOm51bGwsIm1pbkhlaWdodCI6bnVsbCwibWF4V2lkdGgiOm51bGwsIm1heEhlaWdodCI6bnVsbCwianVzdGlmeUNvbnRlbnQiOjEsImFsaWduSXRlbXMiOjIsImFsaWduQ29udGVudCI6MCwiZmxleERpcmVjdGlvbiI6MCwicG9zaXRpb24iOnsidG9wIjpudWxsLCJyaWdodCI6bnVsbCwiYm90dG9tIjpudWxsLCJsZWZ0IjpudWxsfSwiY2hpbGRyZW4iOlt7IndpZHRoIjoiMzAwIiwiaGVpZ2h0IjoiMTUwIiwibWluV2lkdGgiOm51bGwsIm1pbkhlaWdodCI6bnVsbCwibWF4V2lkdGgiOm51bGwsIm1heEhlaWdodCI6bnVsbCwicG9zaXRpb24iOnsidG9wIjpudWxsLCJyaWdodCI6bnVsbCwiYm90dG9tIjpudWxsLCJsZWZ0IjpudWxsfSwiY2hpbGRyZW4iOlt7IndpZHRoIjoiMTUwIiwiaGVpZ2h0IjoiMTUwIiwibWluV2lkdGgiOm51bGwsIm1pbkhlaWdodCI6bnVsbCwibWF4V2lkdGgiOm51bGwsIm1heEhlaWdodCI6bnVsbCwianVzdGlmeUNvbnRlbnQiOjEsImFsaWduSXRlbXMiOjIsInBvc2l0aW9uIjp7InRvcCI6bnVsbCwicmlnaHQiOm51bGwsImJvdHRvbSI6bnVsbCwibGVmdCI6bnVsbH0sImNoaWxkcmVuIjpbeyJ3aWR0aCI6Ijc1IiwiaGVpZ2h0IjoiNzUiLCJtaW5XaWR0aCI6bnVsbCwibWluSGVpZ2h0IjpudWxsLCJtYXhXaWR0aCI6bnVsbCwibWF4SGVpZ2h0IjpudWxsLCJqdXN0aWZ5Q29udGVudCI6MSwiYWxpZ25JdGVtcyI6MiwiYWxpZ25TZWxmIjoyLCJhbGlnbkNvbnRlbnQiOjIsInBvc2l0aW9uIjp7InRvcCI6bnVsbCwicmlnaHQiOm51bGwsImJvdHRvbSI6bnVsbCwibGVmdCI6bnVsbH19XX0seyJ3aWR0aCI6IjE1MCIsImhlaWdodCI6IjE1MCIsIm1pbldpZHRoIjpudWxsLCJtaW5IZWlnaHQiOm51bGwsIm1heFdpZHRoIjpudWxsLCJtYXhIZWlnaHQiOm51bGwsImp1c3RpZnlDb250ZW50IjoxLCJhbGlnbkl0ZW1zIjoyLCJwb3NpdGlvbiI6eyJ0b3AiOm51bGwsInJpZ2h0IjpudWxsLCJib3R0b20iOm51bGwsImxlZnQiOm51bGx9LCJjaGlsZHJlbiI6W3sid2lkdGgiOiI3NSIsImhlaWdodCI6Ijc1IiwibWluV2lkdGgiOm51bGwsIm1pbkhlaWdodCI6bnVsbCwibWF4V2lkdGgiOm51bGwsIm1heEhlaWdodCI6bnVsbCwicG9zaXRpb24iOnsidG9wIjpudWxsLCJyaWdodCI6bnVsbCwiYm90dG9tIjpudWxsLCJsZWZ0IjpudWxsfX1dfV19LHsid2lkdGgiOiIzMDAiLCJoZWlnaHQiOiIxNTAiLCJtaW5XaWR0aCI6bnVsbCwibWluSGVpZ2h0IjpudWxsLCJtYXhXaWR0aCI6bnVsbCwibWF4SGVpZ2h0IjpudWxsLCJwb3NpdGlvbiI6eyJ0b3AiOm51bGwsInJpZ2h0IjpudWxsLCJib3R0b20iOm51bGwsImxlZnQiOm51bGx9fSx7IndpZHRoIjoxMDAsImhlaWdodCI6MTAwLCJtaW5XaWR0aCI6bnVsbCwibWluSGVpZ2h0IjpudWxsLCJtYXhXaWR0aCI6bnVsbCwibWF4SGVpZ2h0IjpudWxsLCJwb3NpdGlvbiI6eyJ0b3AiOm51bGwsInJpZ2h0IjpudWxsLCJib3R0b20iOm51bGwsImxlZnQiOm51bGx9fV19"
  // for visualizing the grid system as I have prior knowledge of only CSS Grid layouts and not CSS Flex.

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  mainContainer: {
    flex: 1,
    width: 500,
    flexDirection: 'column',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap', // For some reason FlexWrap : 'wrap' And
    // Flex : 1 conflicts with elements being centered on the main screen
  },

  container1: {
    flexDirection: 'row',
    width: 300,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },

  container2: {
    flexDirection: 'row',
    width: 300,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },

  middleView1: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },

  middleView2: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  middleView3: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  middleView4: {
    flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },

  innerView1: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'green',
  },

  innerView2: {
    width: 75,
    height: 75,
    backgroundColor: 'yellow',
  },

  innerView3: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },

  innerView4: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
});

export default Nested;
