import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Snippet } from '@/db/repository/snippet.repository'
import { useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { useOptionsModal } from '@/Store/useOptionsModal'
import AntDesign from '@expo/vector-icons/AntDesign'
import ModalOptionsHeader from '@/Components/atoms/ModalOptionsHeader/ModalOptionsHeader'
import ModalOptionsContent from '../ModalOptionsContent/ModalOptionsContent'

type ModalSnippetDetail = {
    title : string | null,
    snippetId : number | null
}

export default function SnippetList({snippetList} : {snippetList : Snippet[] | null}) {
    const { isOptionsModal,setIsOptionsModal } = useOptionsModal()
    const [snippetModalDetail,SetSnippetModalDetail] = useState<ModalSnippetDetail>({
        title : '',
        snippetId : null
    })
    const router = useRouter()
    function handleNavigationPress(id : number){
        router.navigate({
            pathname : `/Snippets/[SnippetId]`,
            params : {
                SnippetId : String(id)
            }
        })
    }

    function handleOptionsClick(id : number,title : string | null){
        setIsOptionsModal(true);
        SetSnippetModalDetail({
            title : title,
            snippetId : id,
        })
    }
  return (
    <>
        <FlatList 
            data={snippetList}
            // @ts-ignore
            keyExtractor={(item) =>item?.id}
            renderItem={({item})=>(
                <Pressable 
                    style={styles.snippetContainer}
                    onPress={()=>handleNavigationPress(item?.id)}
                >
                    <View style={styles.titleContainer}>
                        <Feather name="file-text" color="gray" size={23} />
                        {
                            item.title ? 
                            <Text style={styles.titleText}>{item.title}</Text>
                                : 
                            <Text style={styles.titleText}>Untitled</Text>
                        }
                    </View>
                    <SimpleLineIcons 
                        name="options" 
                        color="gray" 
                        size={20} 
                        style={{paddingVertical : 3,paddingHorizontal : 3}}
                        onPress={()=>handleOptionsClick(item.id,item.title)}
                    />
                </Pressable>
            )}
        />

    <Modal
        visible={isOptionsModal}
        transparent={true}
        animationType='slide'
    >
        <View
            style={styles.modalTransparentBg}
        > 
            <AntDesign
                style={styles.closeIcon}
                color={'black'}
                name="close" 
                size={24} 
                onPress={()=>setIsOptionsModal(false)}
            />
            <View
                style={styles.modalContentContainer}
            >
                <ModalOptionsHeader
                    snippetModalTitle={snippetModalDetail.title}
                />
                <ModalOptionsContent />
            </View>
        </View>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    snippetContainer : {
        flexDirection : 'row',
        marginVertical : 7,
        marginHorizontal : 5,
        paddingVertical : 2,
        paddingHorizontal : 10,
        color : '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        alignItems : 'center',
        justifyContent : 'space-between'
        
    },
    titleContainer :{
        flexDirection : 'row',

    },
    titleText : {
        color : '#E6E6E6',
        marginHorizontal : 10,
        fontSize : 16,
        fontWeight : '600',
    },
    closeIcon : {
        position : 'absolute',
        top : 230,
        right : 170,
        zIndex : 1,
        backgroundColor : 'white',
        borderRadius : 20,
        padding : 5,
    },
    modalTransparentBg : {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContentContainer : {
        height: 450,
        backgroundColor: '#191919',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 0,
    }
})