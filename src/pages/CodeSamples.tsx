import AnimatedCode from '../components/AnimatedCode';
import { useLang } from '../contexts/LanguageContext';

const codeSample = `type EventMap = Record<string, unknown>;

export class EventBus<TEvents extends EventMap> {
    private listeners = new Map<
        keyof TEvents,
        Set<(payload: TEvents[keyof TEvents]) => void>
    >();

    on<TKey extends keyof TEvents>(
        event: TKey,
        listener: (payload: TEvents[TKey]) => void,
    ): () => void {
        const listeners =
            this.listeners.get(event) ??
            new Set<(payload: TEvents[TKey]) => void>();

        listeners.add(listener);

        this.listeners.set(
            event,
            listeners as Set<(payload: TEvents[keyof TEvents]) => void>,
        );

        return () => {
            listeners.delete(listener);
        };
    }

    emit<TKey extends keyof TEvents>(
        event: TKey,
        payload: TEvents[TKey],
    ): void {
        const listeners = this.listeners.get(event);

        if (!listeners) {
            return;
        }

        listeners.forEach(listener => {
            listener(payload);
        });
    }
}

interface AppEvents {
    "user:login": {
        id: string;
        name: string;
    };
    "chat:message": {
        text: string;
        roomId: string;
    };
}

const bus = new EventBus<AppEvents>();

bus.on("user:login", user => {
    console.log(user.name);
});

bus.emit("user:login", {
    id: "42",
    name: "Alice",
});

// Ошибка компиляции:
bus.emit("user:login", {
    foo: "bar",
});`;

const i18n = {
  title: { ru: 'Типобезопасный Event Bus', en: 'Type-safe Event Bus' },
  description: {
    ru: 'Реализация event bus\'а с полной типизацией через TypeScript generics.',
    en: 'An event bus implementation with full typing via TypeScript generics.',
  },
};

function CodeSamples() {
  const { lang } = useLang();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{i18n.title[lang]}</h2>
            <p className="mt-1 text-sm text-slate-500">{i18n.description[lang]}</p>
          </div>
          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            TypeScript
          </span>
        </div>
        <AnimatedCode code={codeSample} language="typescript" />
      </div>
    </div>
  );
}

export default CodeSamples;
