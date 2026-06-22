import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AntDesign from '@expo/vector-icons/AntDesign'

export type LanguageOption = {
  label: string
  value: string
}

type Props = {
  value: string
  onChange: (value: string) => void
  options?: LanguageOption[]
}

const defaultLanguages: LanguageOption[] = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
  { label : 'Rust', value: 'rust' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
]

export default function LanguagePicker({
  value,
  onChange,
  options = defaultLanguages,
}: Props) {

  const [isDropdownOpen,setIsDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Language : </Text>
      <View style={styles.pickerContainer}>
          <Text style={{color : '#D4D4D4',fontSize : 14,fontWeight : '400',marginHorizontal : 5,}}>{value}</Text>
        <Pressable 
          onPress={()=>setIsDropdownOpen(!isDropdownOpen)}
        > 
          <MaterialIcons name="arrow-drop-down" color="#ffffff" size={24} />
        </Pressable>
      </View>

      {
        isDropdownOpen && 
          <ScrollView style={styles.dropDown}>
            <AntDesign 
              name="close" 
              color="#ffffff" 
              size={18} 
              style={{textAlign : 'right'}}
              onPress={()=>setIsDropdownOpen(false)}
            />
            {defaultLanguages.map((item)=>
              <Pressable 
                style={styles.dropdownItem}
                onPress={()=>{
                  onChange(item.value);
                  setIsDropdownOpen(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </Pressable>
            )}
          </ScrollView>

      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
  },
  label: {
    color: '#8F8F8F',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  pickerContainer: {
    flexDirection : 'row',
    paddingVertical : 5,
    paddingHorizontal : 10,
    gap : 15,
    backgroundColor: '#252525',
    borderColor: '#3A3A3A',
    borderRadius: 8,
    borderWidth: 1,
  },
  dropDown : {
    position : 'absolute',
    top : 15,
    left : 50,
    width : 200,
    backgroundColor : '#252525',
    borderColor : '#3A3A3A',
    borderWidth : 1,
    borderRadius : 8,
    paddingVertical : 10, 
    paddingHorizontal : 10,
    zIndex : 1,
    elevation : 10,

  },
  dropdownItem : {
    paddingVertical : 7,
    paddingHorizontal : 5,
  },
  dropdownItemText : {
    color : '#D4D4D4',
    fontSize : 15,
    fontWeight : '400'
  }
})
