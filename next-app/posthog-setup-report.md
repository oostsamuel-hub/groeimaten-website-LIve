<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog analytics is fully configured for this Next.js App Router application with client-side event tracking, automatic exception capture, a reverse proxy via Next.js rewrites, and environment variable management. The `posthog-js` package was already installed, `instrumentation-client.ts` was already correctly initializing PostHog using the EU instance with a `/ingest` reverse proxy, and two events were already instrumented. The wizard verified correctness, set the required environment variables in `.env.local`, and created a PostHog dashboard with insights.

| Event name | Description | File |
|---|---|---|
| `button_clicked` | User clicked the main call-to-action button on the home page | `app/page.tsx` |
| `theme_toggled` | User toggled the color theme between light and dark mode using the keyboard shortcut (`d`) | `components/theme-provider.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/174293/dashboard/666887
- **Button clicks over time**: https://eu.posthog.com/project/174293/insights/tYlylV6E
- **Theme toggles over time**: https://eu.posthog.com/project/174293/insights/dTtikm83
- **Unique users per day**: https://eu.posthog.com/project/174293/insights/RutQZjmX
- **Theme preference (dark vs light)**: https://eu.posthog.com/project/174293/insights/jT7Uv4CC
- **Button clicks vs theme toggles**: https://eu.posthog.com/project/174293/insights/lXihkkFy

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
