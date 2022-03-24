import React from 'react'
import { MarketType, getMarket, Locale, getSportsName } from "@cloudbet/market-helper";

function getSport(sport) {
  return fetch(`https://sports-api.cloudbet.com/pub/v2/odds/sports/${sport}`, {
    headers: {
      "X-Api-Key": 'eyJhbGciOiJSUzI1NiIsImtpZCI6Img4LThRX1YwZnlUVHRPY2ZXUWFBNnV2bktjcnIyN1YzcURzQ2Z4bE44MGMiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfdGllciI6ImFmZmlsaWF0ZSIsImV4cCI6MTk2MjgzMDI2MSwiaWF0IjoxNjQ3NDcwMjYxLCJqdGkiOiIwYmE0M2FhNC00ZmZjLTRjNjQtYjMyYS1lYWJiM2FmN2Y1NDMiLCJzdWIiOiIwNGM2OTVhNC0zYzgzLTQwOTQtOGU3ZS1mZjM1ZmEwZjc1NzMiLCJ0ZW5hbnQiOiJjbG91ZGJldCIsInV1aWQiOiIwNGM2OTVhNC0zYzgzLTQwOTQtOGU3ZS1mZjM1ZmEwZjc1NzMifQ.Oeaa9YWtkzvNdi6qMO2xuPXEB_ncrFPfsO1gaA-wJnEEV-ReRlPWBXfCHC4DmVzXNxPqYBYjVLS9GTgCEv3pVLNBsjlIFaJrZ-gFQFjGRwIt-9lnz3ojFaZeSFuyr3LmWl04EHuDQUNVr5-v9bLRfqa8-iArn9PqlvHuJS9TT-6xNaUT24V9LZtWNXV6hBNzCfSI7QdGpW2MEDJe4ZkFyl-M2CeENgQC3sR6-v3zP0UwDj9mxDdHXIMGUgV9IKDKzQt1rXhGS878nesOBKEqjQkERKpmMmE_v_gBeAF98jnQ5hE1XkBpcf9Bc5jM5W8xcVUgn37RQN8Pav6tE1Ddwg',
      "cache-control": "max-age=600"
    }
  });
}

function getCompetition(competition) {
  return fetch(
    `https://sports-api.cloudbet.com/pub/v2/odds/competitions/${competition}`,
    {
      headers: {
        "X-Api-Key": 'eyJhbGciOiJSUzI1NiIsImtpZCI6Img4LThRX1YwZnlUVHRPY2ZXUWFBNnV2bktjcnIyN1YzcURzQ2Z4bE44MGMiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfdGllciI6ImFmZmlsaWF0ZSIsImV4cCI6MTk2MjgzMDI2MSwiaWF0IjoxNjQ3NDcwMjYxLCJqdGkiOiIwYmE0M2FhNC00ZmZjLTRjNjQtYjMyYS1lYWJiM2FmN2Y1NDMiLCJzdWIiOiIwNGM2OTVhNC0zYzgzLTQwOTQtOGU3ZS1mZjM1ZmEwZjc1NzMiLCJ0ZW5hbnQiOiJjbG91ZGJldCIsInV1aWQiOiIwNGM2OTVhNC0zYzgzLTQwOTQtOGU3ZS1mZjM1ZmEwZjc1NzMifQ.Oeaa9YWtkzvNdi6qMO2xuPXEB_ncrFPfsO1gaA-wJnEEV-ReRlPWBXfCHC4DmVzXNxPqYBYjVLS9GTgCEv3pVLNBsjlIFaJrZ-gFQFjGRwIt-9lnz3ojFaZeSFuyr3LmWl04EHuDQUNVr5-v9bLRfqa8-iArn9PqlvHuJS9TT-6xNaUT24V9LZtWNXV6hBNzCfSI7QdGpW2MEDJe4ZkFyl-M2CeENgQC3sR6-v3zP0UwDj9mxDdHXIMGUgV9IKDKzQt1rXhGS878nesOBKEqjQkERKpmMmE_v_gBeAF98jnQ5hE1XkBpcf9Bc5jM5W8xcVUgn37RQN8Pav6tE1Ddwg',
        "cache-control": "max-age=600"
      }
    }
  );
}

const sportMarkets = {
  "soccer": [MarketType.soccer_match_odds],
  "basketball": [MarketType.basketball_moneyline, MarketType.basketball_totals],
  "american-football": [MarketType.american_football_quarter_1x2],
  "baseball": [MarketType.baseball_moneyline],
  "golf": [MarketType.golf_winner],
  "tennis": [MarketType.tennis_winner]



};

function getMarkets(event, sportKey) {
  const [markets] = getMarket(event, sportMarkets[sportKey][0]);
  return markets;
}


const sports = ["basketball", "american-football", "baseball", "golf", "soccer", "tennis"]
export const Main = () => {
  const [sport, setSport] = React.useState(sports[0]);
  const [loading, setLoading] = React.useState(false);
  const [competitions, setCompetitions] = React.useState([]);
  React.useEffect(() => {
    if (!sport) {
      return;
    }
    setLoading(true);
    getSport(sport)
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((body) => {
        setCompetitions(body.categories.flatMap((c) => c.competitions));
      });
  }, [sport]);

  return (
    <div className="App">
      <div className="list">
        <label for="sport">Sport</label>
        <select value={sport} onChange={(e) => setSport(e.target.value)}>
          {sports.map((s) => (
            <option value={s}>{getSportsName(s, Locale.en)}</option>
          ))}
        </select>
      </div>
      {loading ? <Loading /> : competitions.map((c) => (
        <div className='leagues'>
          <Competition
            competition={c}
            key={c.key}
            sportKey={sport}
          />
        </div>
      ))}
    </div>

  )
}

function Competition({ competition, sportKey }) {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const loadEvents = (key) => {
    setExpanded((e) => !e);
    if (events.length || loading) {
      return;
    }
    setLoading(true);
    getCompetition(key)
      .then((response) => response.json())
      .then((body) => {
        setEvents(body.events);
        setLoading(false);
      });
  };
  return (
    <div className="competition">
      <div
        className="competition-title"
        onClick={() => loadEvents(competition.key)}
      >
        {competition.name}
      </div>
      {expanded && (
        <div className='result'>
          {loading ? (
            <Loading />
          ) : (
            events.map((e) => <Event event={e} key={e.id} sportKey={sportKey} />)
          )}
        </div>
      )}
    </div>
  );
}

function Event({ event, sportKey }) {
  const eventMarkets = React.useMemo(() => {
    const [markets, err] = getMarket(event, sportMarkets[sportKey][0]);
    if (err) {
      return [];
    }
    return markets;
  }, [event, sportKey]);
  if (!eventMarkets || !eventMarkets.length) {
    return null;
  }
  return (
    <div>
      <div className="event-title">{event.name}</div>
      {eventMarkets.map((market) => {
        if (!market.lines.length) {
          return null;
        }
        const lines = market.lines.map(line => (
          <div className="selections">
            {line.map((outcome) => (
              <div className="selection">
                {outcome.name} <br />
                {outcome.back.price}
              </div>
            ))}
          </div>
        ));
        return (
          <>
          <div className='group'>
            <div className='type'>
              {market.name}<br />
            </div>
              {lines}
            </div>
          </>
        )
      })}
    </div>
  );
}

function Loading() {
  return <div className="loading">Loading...</div>;
}