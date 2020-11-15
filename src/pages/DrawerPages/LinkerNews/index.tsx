import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Text, Switch, View } from 'react-native';
import data from './data';

import { 
  Wrapper,
  Header,
  Button,
  PageTitle,
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  NewsGroup,
  NewsList,
  NewsBox,
  NewsBoxMarker,
  NewsText,
  SavedOnlyGroup,
  SavedOnlyText
} from './styles';
import Heading from '../../../components/Heading';

interface ItemProps {
  item: typeof data[0];
}

const LinkerNews: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName>{item.name}</CategoryName>
    </CategoryContainer>
  )

  return (
    <Wrapper>
      <Heading>Linker News</Heading>
      <NewsGroup>
        <List>
          {data.map(item => (
            <CategoryItem key={item.name} item={item} />
          ))}
        </List>

        <SavedOnlyGroup>
          <SavedOnlyText>Saved Only</SavedOnlyText>
          <Switch trackColor={{ false: "#c4c4c4", true: "#c4c4c4" }} />
        </SavedOnlyGroup>
        <NewsList>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
          <NewsBox>
            <NewsBoxMarker />
            <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
          </NewsBox>
        </NewsList>
      </NewsGroup>
    </Wrapper>
  );
};

export default LinkerNews;
