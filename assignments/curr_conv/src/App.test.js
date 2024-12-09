import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { App, SourceCurrency, TargetCurrency, ConversionResult } from './App';
import { act } from 'react';

const mockFetch = async () => Promise.resolve({
  ok: true,
  status: 200,
  json: async () =>
    Promise.resolve({
      data: {
        JPY: 110,
        EUR: 0.85
      },
    })
});

beforeEach(() => {
  fetchMock = jest.spyOn(global, "fetch")
    .mockImplementation(mockFetch);
});

describe('SourceCurrency Component', () => {
  test('renders SourceCurrency component', () => {
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={() => { }} onAmountChange={() => { }} />);
    const sourceCurrencyElement = screen.getByText(/Source Currency/i);
    expect(sourceCurrencyElement).toBeInTheDocument();
  });

  test('renders dropdown with correct options', () => {
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={() => { }} onAmountChange={() => { }} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0].value).toBe('USD');
    expect(options[1].value).toBe('EUR');
    expect(options[2].value).toBe('JPY');
  });

  test('renders SourceCurrency component', () => {
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={() => { }} onAmountChange={() => { }} />);
    const sourceCurrencyElement = screen.getByText(/Source Currency/i);
    expect(sourceCurrencyElement).toBeInTheDocument();
  });

  test('renders dropdown with correct options', () => {
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={() => { }} onAmountChange={() => { }} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0].value).toBe('USD');
    expect(options[1].value).toBe('EUR');
    expect(options[2].value).toBe('JPY');
  });

  test('calls onCurrencyChange when a new currency is selected', () => {
    const handleCurrencyChange = jest.fn();
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={handleCurrencyChange} onAmountChange={() => { }} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'EUR' } });
    expect(handleCurrencyChange).toHaveBeenCalledWith('EUR');
  });

  test('calls onAmountChange when a new amount is entered', () => {
    const handleAmountChange = jest.fn();
    render(<SourceCurrency currency="USD" amount={0} onCurrencyChange={() => { }} onAmountChange={handleAmountChange} />);
    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '100' } });
    expect(handleAmountChange).toHaveBeenCalledWith('100');
  });
});

describe('TargetCurrency Component', () => {
  test('renders TargetCurrency component', () => {
    render(<TargetCurrency currency="USD" onCurrencyChange={() => { }} />);
    const targetCurrencyElement = screen.getByText(/Target Currency/i);
    expect(targetCurrencyElement).toBeInTheDocument();
  });

  test('renders dropdown with correct options in TargetCurrency', () => {
    render(<TargetCurrency currency="USD" onCurrencyChange={() => { }} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0].value).toBe('USD');
    expect(options[1].value).toBe('EUR');
    expect(options[2].value).toBe('JPY');
  });

  test('calls onCurrencyChange when a new currency is selected in TargetCurrency', () => {
    const handleCurrencyChange = jest.fn();
    render(<TargetCurrency currency="USD" onCurrencyChange={handleCurrencyChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'EUR' } });
    expect(handleCurrencyChange).toHaveBeenCalledWith('EUR');
  });
});

describe('ConversionResult Component', () => {
  test('renders ConversionResult component', () => {
    render(<ConversionResult amount={100} currency="EUR" />);
    const conversionResultElement = screen.getByText(/Converted Amount 100 EUR/i);
    expect(conversionResultElement).toBeInTheDocument();
  });

  test('displays the correct converted amount and currency', () => {
    render(<ConversionResult amount={200} currency="JPY" />);
    const conversionResultElement = screen.getByText(/Converted Amount 200 JPY/i);
    expect(conversionResultElement).toBeInTheDocument();
  });
});


describe('App Component', () => {
  test('renders the App component', () => {
    render(<App />);
    expect(screen.getByText(/Currency Converter/i)).toBeInTheDocument();
  });

  test('initially renders with default values', () => {
    render(<App />);
    expect(screen.getByLabelText(/Source Currency/i).value).toBe('USD');
    expect(screen.getByLabelText(/Target Currency/i).value).toBe('JPY');
    expect(screen.getByLabelText(/Amount/i).value).toBe('0');
    expect(screen.getByText(/Converted Amount/i).textContent).toBe('Converted Amount 0 JPY');
  });

  test('updates converted amount when source currency changes', async () => {
    render(<App />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/Source Currency/i), { target: { value: 'EUR' } });
    });
    await waitFor(() => expect(screen.getByText(/Converted Amount/i).textContent).toBe('Converted Amount 0 JPY'));
  });

  test('updates converted amount when target currency changes', async () => {
    render(<App />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/Target Currency/i), { target: { value: 'EUR' } });
    });
    await waitFor(() => expect(screen.getByText(/Converted Amount/i).textContent).toBe('Converted Amount 0 EUR'));
  });

  test('updates converted amount when amount changes', async () => {
    render(<App />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
    });
    await waitFor(() => expect(screen.getByText(/Converted Amount/i).textContent).toBe('Converted Amount 11000 JPY'));
  });

  test('fetches conversion rate and updates converted amount correctly', async () => {
    render(<App />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/Amount/i), { target: { value: '100' } });
      fireEvent.change(screen.getByLabelText(/Source Currency/i), { target: { value: 'USD' } });
      fireEvent.change(screen.getByLabelText(/Target Currency/i), { target: { value: 'EUR' } });
    });
    await waitFor(() => expect(screen.getByText(/Converted Amount/i).textContent).toBe('Converted Amount 85 EUR'));
  });
});
