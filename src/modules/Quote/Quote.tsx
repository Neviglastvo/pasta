import React, { useEffect } from 'react';
import * as Sc from './Quote.styled';
import { useCopyToClipboard } from 'usehooks-ts';
import { QuoteEntity } from '../../shared/QuoteEntity';

interface QuoteProps {
  quote: QuoteEntity;
  getRandomQuotesByTag: (tag: string) => void;
}

function Quote({ quote, getRandomQuotesByTag }: QuoteProps) {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy(quote.content)
      .then(() => {
        console.log('Copied!', quote.content);
      })
      .catch((error) => {
        console.error('Failed to copy!', error);
      });
  };

  return (
    <Sc.Quote>
      <Sc.Text onClick={handleCopy}>{quote.content}</Sc.Text>
      <Sc.Tags>
        {quote.tags.map((tag, i) => (
          <li key={i} onClick={() => getRandomQuotesByTag(tag)}>
            {tag}
          </li>
        ))}
      </Sc.Tags>
      {/* <div onClick={() => deleteQuote(quote.id)}>deleteQuote</div> */}
    </Sc.Quote>
  );
}

export default Quote;
