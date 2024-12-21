import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  test.setTimeout(0);
  const clickButton = async (name) => {
    const button = page.getByRole('button', { name });
    await button.click();
  };

  const verifyText = async (text) => {
    await expect(page.getByText(text)).toBeVisible();
  };

  await page.goto('https://neal.fun/');

  const levels = [
    { level: 'Level 1: The Original', action: 'Pull the lever' },
    { level: 'Level 2: Four People', action: 'Pull the lever' },
    { level: 'Level 3: Life Savings', action: 'Pull the lever' },
    { level: 'Level 4: You', action: 'Do nothing' },
    { level: 'Level 5: Priceless Painting', action: 'Pull the lever' },
    { level: 'Level 6: Bribes', action: 'Do nothing' },
    { level: 'Level 7: Levels of sentience', action: 'Do nothing' },
    { level: 'Level 8: Sleeping', action: 'Pull the lever' },
    { level: 'Level 9: Personal choices', action: 'Do nothing' },
    { level: 'Level 10: Mercy', action: 'Pull the lever' },
    { level: 'Level 11: Minor Inconvenience', action: 'Pull the lever' },
    { level: 'Level 12: Best Friend', action: 'Do nothing' },
    { level: "Level 13: Can't see", action: 'Pull the lever' },
    { level: 'Level 14: Cousins', action: 'Do nothing' },
    { level: 'Level 15: Age', action: 'Do nothing' },
    { level: 'Level 16: Clones', action: 'Pull the lever' },
    { level: 'Level 17: Mystery Box', action: 'Do nothing' },
    { level: 'Level 18: I am Robot', action: 'Do nothing' },
    { level: 'Level 19: Economic Damage', action: 'Pull the lever' },
    { level: 'Level 20: External costs', action: 'Pull the lever' },
    { level: 'Level 21: Reincarnation', action: 'Pull the lever' },
    { level: 'Level 22: Harmless Prank?', action: 'Pull the lever' },
    { level: 'Level 23: Citizens', action: 'Pull the lever' },
    { level: 'Level 24: Eternity', action: 'Pull the lever' },
    { level: 'Level 25: Enemy', action: 'Pull the lever' },
    { level: 'Level 26: Lifespan', action: 'Pull the lever' },
    { level: 'Level 27: Time Machine', action: 'Pull the lever' },
    { level: 'Level 28: Free Will', action: 'I have a choice' }
  ];

  for (const { level, action } of levels) {
    await verifyText(level);
    await clickButton(action);
    if (action == 'I have a choice') {
      await clickButton('Next');
      await expect(page.getByRole('link', { name: 'More posts on Neal.fun' })).toBeVisible();   
    }
    else{
      await clickButton('Next');
    }
  }
  });
