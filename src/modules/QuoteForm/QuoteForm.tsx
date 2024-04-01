import { FormEvent, useState } from 'react';
import { remult } from 'remult';
import { QuoteEntity } from '../../shared/QuoteEntity';
import * as Sc from './QuoteForm.styled';

const quotesRepo = remult.repo(QuoteEntity);

const initialState = {
  title: '',
  tags: [],
  content: '',
};

interface QuoteFormProps {
  onSave?: (quote: QuoteEntity) => void;
}

export default function QuoteForm({ onSave }: QuoteFormProps) {
  const [quote, setQuote] = useState<Partial<QuoteEntity>>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const tags = value.split(',').map((tag) => tag.trim());

    switch (name) {
      case 'tags':
        setQuote((prevState) => ({
          ...prevState,
          tags: value.split(',').map((tag) => tag.trim()),
        }));
        break;
      default:
        setQuote((prevState) => ({ ...prevState, [name]: value }));
        break;
    }
  };

  const addQuote = async ({ title, tags, content }: Partial<QuoteEntity>) => {
    const quote = await quotesRepo.save(
      quotesRepo.create({ title, tags, content }),
    );

    onSave?.(quote);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await addQuote(quote);

    setQuote(initialState);
  };

  return (
    <Sc.Form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={quote.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Tags:
        <input
          type="text"
          name="tags"
          value={quote.tags?.join(', ')}
          onChange={handleChange}
        />
      </label>
      <label>
        Content:
        <textarea
          value={quote.content}
          name="content"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </Sc.Form>
  );
}
