# Animation Examples & Usage Guide

## Overview
This portfolio now features smooth, scroll-triggered animations that enhance user engagement without overwhelming the experience. All animations are optimized for performance using GPU-accelerated transforms.

---

## 🎯 How to Test the Animations

### Local Testing
1. Open your browser to `http://localhost:5173`
2. **Refresh the page** to reset all animations
3. **Scroll slowly** down the page to see animations trigger as sections come into view
4. **Click navbar links** (Home, Projects, About) to test smooth scrolling

---

## 📐 Animation Types Implemented

### 1. Fade In (`.scroll-fade-in`)
**Used in**: Home section hero content

```css
opacity: 0 → opacity: 1
Duration: 0.8s
```

**Effect**: Content gently appears as you scroll

---

### 2. Slide Up (`.scroll-slide-up`)
**Used in**: All project cards

```css
opacity: 0, translateY(40px) → opacity: 1, translateY(0)
Duration: 0.8s
Stagger: 0.1s-0.2s delays between cards
```

**Effect**: Cards rise up from below, creating a progressive reveal

---

### 3. Slide Right (`.scroll-slide-right`)
**Used in**: Section titles (Projects, About)

```css
opacity: 0, translateX(-40px) → opacity: 1, translateX(0)
Duration: 0.8s
```

**Effect**: Titles slide in from the left

---

### 4. Slide Left (`.scroll-slide-left`)
**Used in**: About section content text

```css
opacity: 0, translateX(40px) → opacity: 1, translateX(0)
Duration: 0.8s
```

**Effect**: Content slides in from the right

---

### 5. Scale In (`.scroll-scale-in`)
**Used in**: About section profile image

```css
opacity: 0, scale(0.9) → opacity: 1, scale(1)
Duration: 0.8s
```

**Effect**: Image zooms in with a subtle scale effect

---

## 🔧 Customization Options

### Hook Configuration
The `useScrollAnimation` hook accepts these options:

```typescript
{
  threshold: 0.1,      // 0-1: how much of element needs to be visible
  rootMargin: '0px',   // offset before triggering (e.g., '-100px')
  triggerOnce: true    // false to re-trigger on scroll up
}
```

### Example Usage in Components

```tsx
// Trigger when 30% visible, only once
const animation = useScrollAnimation({ threshold: 0.3 });

// Trigger repeatedly (on scroll up/down)
const animation = useScrollAnimation({ 
  threshold: 0.2, 
  triggerOnce: false 
});

// Early trigger with offset
const animation = useScrollAnimation({ 
  threshold: 0.1,
  rootMargin: '-50px'  // triggers 50px before element enters viewport
});
```

---

## ✨ Smooth Scroll Behavior

### How It Works
All anchor links (`#home`, `#projects`, `#about`) now use native CSS smooth scrolling:

```css
html {
  scroll-behavior: smooth;
}
```

**Benefits**:
- No JavaScript required
- Works across all modern browsers
- Automatic with all hash links
- Can be disabled by users who prefer reduced motion

---

## 🎨 Adding New Animations

### Step 1: Use the Hook
```tsx
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
```

### Step 2: Apply to Element
```tsx
<div 
  ref={ref} 
  className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}
>
  Your content here
</div>
```

### Step 3: Choose Animation Class
- `.scroll-fade-in` - Simple opacity fade
- `.scroll-slide-up` - Slide from bottom
- `.scroll-slide-left` - Slide from right
- `.scroll-slide-right` - Slide from left
- `.scroll-scale-in` - Zoom effect

---

## 🚀 Performance Considerations

### Why These Animations Are Fast

1. **GPU Acceleration**: Using `transform` and `opacity` (not `top`, `left`, `width`, etc.)
2. **Intersection Observer**: Native browser API, very efficient
3. **Will-Change Optimization**: Browser pre-optimizes animated properties
4. **Trigger Once**: Animations run once per page load by default

### Best Practices
✅ DO use `transform` and `opacity`  
✅ DO trigger animations once for better performance  
✅ DO keep animations under 1 second  

❌ DON'T animate `width`, `height`, `top`, `left`  
❌ DON'T add animations to elements that change frequently  
❌ DON'T overuse animations (less is more)

---

## 📱 Responsive Behavior

All animations work seamlessly across:
- Desktop (full effects)
- Tablet (full effects)
- Mobile (full effects)

Animations use the same timing and effects across all screen sizes for consistency.

---

## ♿ Accessibility

### Respecting User Preferences
For users who have enabled "Reduce Motion" in their OS settings, consider adding:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-fade-in,
  .scroll-slide-up,
  .scroll-slide-left,
  .scroll-slide-right,
  .scroll-scale-in {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

This immediately shows content without animation for users who find motion distracting or uncomfortable.

---

## 🎯 Summary

Your portfolio now features:
- ✅ 5 different animation types
- ✅ Smooth scroll navigation
- ✅ Staggered reveals for visual hierarchy
- ✅ Performance-optimized with GPU acceleration
- ✅ Easy to customize and extend
- ✅ Works on all screen sizes

**Result**: A more engaging, professional portfolio that guides visitors' attention through your content! 🎉
