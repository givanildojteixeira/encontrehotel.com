import { FlatList, View } from "react-native";
import React from "react";
import Loading from "../../../components/Loading";
import { globalStyles } from "../../../styles";
import Hotel from "../../../types/Hotel";
import useCollection from "../../../firebase/hooks/useCollection";
import ViewBook from "../../../components/ViewHotel";
import { data } from "../../../mocks/data";

export default function details() {
  // const { id } = useGlobalSearchParams();
  const { data: hotel, loading, create, remove, update, all, refreshData } = useCollection<Hotel>("hoteis");

  // important: always check for loading state since firestore is async!
  // Also, you can check for existence of book object so your type Book | undefined becomes a Book for sure
  if (loading || !hotel) return <Loading />;

  return (
    <View style={globalStyles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ViewBook
              hotel={item}
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
}
