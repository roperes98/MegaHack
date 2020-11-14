import React from 'react';

import { Text, Switch } from 'react-native';
// import { Switch } from 'react-native-gesture-handler';

import { 
  Wrapper,
  NewsGroup,
  NewsBox,
  NewsBoxMarker,
  NewsText,
  SavedOnlyGroup,
  SavedOnlyText
} from './styles';

const LinkerNews: React.FC = () => {
  return (
    <Wrapper>
      <NewsGroup>
        <SavedOnlyGroup>
          <SavedOnlyText>Saved Only</SavedOnlyText>
          <Switch trackColor={{ false: "#c4c4c4", true: "#c4c4c4" }} />
        </SavedOnlyGroup>
        <NewsBox>
          <NewsBoxMarker />
          <NewsText>Comércio com mundo todo 'sem viés ideológico' é elemento chave</NewsText>
        </NewsBox>
      </NewsGroup>
    </Wrapper>
  );
};

export default LinkerNews;
