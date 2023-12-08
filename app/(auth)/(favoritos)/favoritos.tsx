import { FlatList, RefreshControl, View } from 'react-native'
import React, { useState } from 'react'
import Loading from '../../../components/Loading'
import { globalStyles } from '../../../styles'
import Hotel from '../../../types/Hotel'
import useCollection from '../../../firebase/hooks/useCollection'
import ViewBook from '../../../components/ViewFavoritos'
import useAuth from '../../../firebase/hooks/useAuth'
import { Text } from '@rneui/base'

export default function details() {
  const { user } = useAuth()
  const [refreshing, setRefreshing] = useState(false)

  console.log('user:', user?.uid)

  const {
    data: favoritos,
    loading: favoritoIsLoading,
    remove,
    refreshData,
  } = useCollection<Hotel>('users/' + user?.uid + '/favorites')

  // important: always check for loading state since firestore is async!
  // Also, you can check for existence of book object so your type Book | undefined becomes a Book for sure
  if (favoritoIsLoading) return <Loading />

  console.log(favoritos)

  return (
    <View style={globalStyles.container}>

        <Text style={globalStyles.h1}>
          Meus Favoritos
        </Text>

      <FlatList
        data={favoritos}
        renderItem={({ item }) => (
          <ViewBook
            hotel={item}
            onDelete={async () => {
              await remove(item.id!)
              await refreshData()
            }}
          />
        )}
        style={{ width: '100%' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
        }
      />
    </View>
  )
}
