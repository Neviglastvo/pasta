import { useEffect, useState } from 'react';
import { remult } from 'remult';
import { QuoteEntity } from './shared/QuoteEntity';
import { useCopyToClipboard, useLocalStorage } from 'usehooks-ts';
import QuoteForm from './modules/QuoteForm/QuoteForm';
import { GlobalStyle } from './styles/global-styles';
import Quote from './modules/Quote/Quote';
import * as Sc from './App.styled';

const randomNumber = (maxLimit = 100) => Math.floor(Math.random() * maxLimit);

const quotesRepo = remult.repo(QuoteEntity);

export default function App() {
  const [history, setHistory] = useLocalStorage<QuoteEntity[]>('history', []);

  const [quote, setQuote] = useState<QuoteEntity>();
  const [quotesByTag, setQuotesByTag] = useState<QuoteEntity[]>();

  const [isCreation, setIsCreation] = useState<boolean>(false);
  const [isHistoryOpened, setIsHistoryOpened] = useState<boolean>(false);

  console.log('quotesByTag', quotesByTag);

  const getRandomQuote = async (tag?: string) => {
    const total = await quotesRepo.count();
    if (total === 0) return;

    const quote = await quotesRepo.find({
      limit: 1,
      page: randomNumber(total) + 1,
      where: tag ? { tags: { $contains: tag } } : {},
    });

    console.log('quote', quote);

    if (!quote.length) return;

    setQuote(quote[0]);

    const isAlreadyInHistory = history.some((q) => q.id === quote[0].id);
    if (isAlreadyInHistory) return;

    setHistory(() => [...history, quote[0]]);
  };

  const getRandomQuotesByTag = async (tag: string) => {
    const total = await quotesRepo.count();
    if (total === 0) return console.log('No quotes found');

    console.log('total', total, randomNumber(total) + 1);

    const quote = await quotesRepo.find({
      limit: 100,
      page: 1,
      where: { tags: { $contains: tag } },
    });

    setQuotesByTag(quote);
  };

  const deleteQuote = async (id: QuoteEntity['id']) => {
    await quotesRepo.delete({ id });

    getRandomQuote();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const handleSave = (quote: QuoteEntity) => {
    setQuote(quote);
    setIsCreation(!isCreation);
  };

  if (!quote) return <>🍝</>;

  return (
    <Sc.Layout>
      <GlobalStyle />

      <Sc.Actions>
        <li onClick={() => setIsCreation(!isCreation)}>
          {isCreation ? '➖' : '➕'}
        </li>
        <li
          onClick={() => {
            setIsCreation(false);
            getRandomQuote();
          }}
        >
          🔄
        </li>
        <li>✏️</li>
        <li
          onClick={() => {
            quote && deleteQuote(quote.id);
          }}
        >
          🗑
        </li>
      </Sc.Actions>

      <Sc.CenteredBlock>
        {isCreation ? (
          <QuoteForm onSave={handleSave} />
        ) : (
          quote && (
            <Quote quote={quote} getRandomQuotesByTag={getRandomQuotesByTag} />
          )
        )}
      </Sc.CenteredBlock>

      {history.length !== 0 && (
        <Sc.History $isOpened={isHistoryOpened}>
          <Sc.HistoryReset onClick={() => setHistory([])}>
            🧹🧹🧹
          </Sc.HistoryReset>

          <Sc.HistoryToggler
            onClick={() => setIsHistoryOpened(!isHistoryOpened)}
          >
            📋
          </Sc.HistoryToggler>

          <Sc.HistoryList>
            {history.map((quote, i) => {
              return (
                <Sc.HistoryItem key={i}>
                  <p>{quote.title}</p>
                  <p>{quote.content}</p>

                  <Sc.HistoryTags>
                    {quote.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </Sc.HistoryTags>
                </Sc.HistoryItem>
              );
            })}
          </Sc.HistoryList>
        </Sc.History>
      )}
    </Sc.Layout>
  );
}
