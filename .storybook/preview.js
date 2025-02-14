import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
    // parameters は Storybook の機能やアドオンの振る舞いをコントロールするのに使用します。
    // この例では、アクション (actions、呼び出しのモック) がどのように扱われるかを設定しています。
    parameters: {
        // この設定は、プロパティ名が on で始まり、その後に大文字が続く（例えば onArchiveTask や onPinTask）
        // ものを自動的に検出し、ユーザーが操作したときにそのイベントを Storybook の UI 上でログとして表示します。
        // これにより、コンポーネントがどのようなアクションを発生させるかを簡単に確認できます。
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                // プロパティ名に background や color が含まれる場合、
                // 自動的にカラーピッカーが表示されるようになります。これにより、
                // ユーザーがカラー設定を手軽に変更・確認できるようになります。
                color: /(background|color)$/i,
                // プロパティ名に Date が含まれる場合、日付ピッカーが表示されるように設定されています。
                // これにより、日付関連の値を直感的に編集することが可能です。
                date: /Date$/,
            },
        },
    },
};

export default preview;
