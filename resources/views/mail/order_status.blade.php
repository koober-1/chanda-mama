
<h1 style="line-height: 24px; margin-bottom:15px; font-size: 20px;" >{{ ucwords($subject) }}  </h1>

@php
    $currency = \App\Models\Setting::get_value('currency') ?? '$';
@endphp

@if(isset($assign) && $assign == true)

    @if(isset($seller) && !empty($seller))

        <p style="line-height: 24px; margin-bottom:15px;">
            Dear, {{ $seller->name }}
        </p>

        <p style="line-height: 24px; margin-bottom: 15px;">
            You order, #{{ $order->id }} is just assigned a delivery boy.
        </p>

        <h1 style="line-height: 24px; margin-bottom:15px; font-size: 20px;"> Delivery Boy details </h1>

        <table border="1" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
            <tr>
                <td align="left"> Name </td>
                <td align="left"> {{$deliveryBoy->name}} </td>

                <td align="left"> Date of Birth </td>
                <td align="left"> {{$deliveryBoy->dob}} </td>
            </tr>
            <tr>
                <td align="left"> Email </td>
                <td align="left"> {{$deliveryBoy->email}} </td>

                <td align="left"> Mobile </td>
                <td align="left"> {{$deliveryBoy->mobile}} </td>
            </tr>
        </table><br>
    @else
        <p style="line-height: 24px; margin-bottom:15px;">
            Dear, {{ $deliveryBoy->name }}
        </p>
        <p style="line-height: 24px; margin-bottom: 15px;">
          You have just assigned new order, #{{ $order->id }}.
        </p>
    @endif

    <p style="line-height: 24px; margin-bottom: 15px;">
        Estimated delivery time is {{ $order->delivery_time }}
    </p>

    <p style="line-height: 24px; margin-bottom: 15px;">
        <strong>
            Delivery address :-
        </strong><br>
        {{ $order->address }}
    </p>

    <a href="{{ $redirect_url }}" style="color: #ffffff; text-decoration: none;">
        <table border="0" align="center" width="180" cellpadding="0" cellspacing="0" bgcolor="#37a279" style="margin-bottom:20px;">
            <tr>
                <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
            </tr>
            <tr>
                <td align="center" style="color: #ffffff; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 22px; letter-spacing: 2px;">
                    <!-- main section button -->
                    <div style="line-height: 22px;">
                        Check it out
                    </div>
                </td>
            </tr>
            <tr>
                <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
            </tr>
        </table>
    </a>

@else
    @if($user_type == 0)
        {{--here customer mail--}}

        @if($order->active_status == \App\Models\OrderStatusList::$received)

            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $user->name }}
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                Your order has been received.
            </p>
            <p style="line-height: 24px;margin-bottom:15px;">
                This notification is just a friendly reminder (not a bill or a second charge) that on {{ $order->created_at }} you placed an order from
                {{ $app_name }}.
                The charge will appear on your bill.
                This is just a reminder to help you recognise the charge.
            </p>

            {{-- Product details table: scrollable wrapper for small screens, inline styles for email clients --}}
            <p style="font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">Product Details:</p>
            <div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
                <table style="width: 100%; max-width: 100%; min-width: 320px; border-collapse: collapse; border: 1px solid #ddd; font-size: 14px;">
                    <thead>
                    <tr style="background-color: #f5f5f5;">
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Sr No.</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Name</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Unit</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Price</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Tax {{ $currency }} (%)</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">Qty</th>
                        <th style="padding: 10px 8px; text-align: center; border: 1px solid #ddd;">SubTotal ( {{ $currency }} )</th>
                    </tr>
                    </thead>
                    <tbody>
                    @php
                        $total_tax_amount = 0;
                        $total_quantity = 0;
                        $total_sub_total = 0;
                        $order_items = $order->items;
                    @endphp
                    @foreach($order_items as $index => $item)
                        <tr style="background-color: #fff;">
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $index+1 }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd; word-break: break-word;">{{ $item->product_name }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd; word-break: break-word;">{{ $item->variant_name }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $item->discounted_price > 0 ? $item->discounted_price : $item->price }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $item->tax_amount. "  (" .$item->tax_percentage."%)" }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $item->quantity }}</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $item->sub_total }}</td>
                            @php
                                $total_tax_amount = $total_tax_amount + $item->quantity;
                                $total_quantity = $total_quantity + $item->quantity;
                                $total_sub_total = $total_sub_total + $item->sub_total;
                            @endphp
                        </tr>
                    @endforeach
                    </tbody>
                    <tfoot>
                    <tr style="background-color: #f5f5f5; font-weight: 600;">
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"></td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"></td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"></td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"></td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">Total</td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $total_quantity }}</td>
                        <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $total_sub_total }}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>

            {{-- Order summary table: full width, responsive --}}
            <p style="margin: 20px 0 8px 0;"><b>Payment Method : </b> {{ strtoupper($order->payment_method) }}</p>
            <table style="width: 100%; max-width: 100%; border-collapse: collapse; border: 1px solid #ddd; font-size: 14px;">
                <tbody>
                <tr style="background-color: #fff;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd; width: 60%;">Total Order Price ({{ $currency }})</th>
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ $order->remaining_total }}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd;">Delivery Charge ({{ $currency }})</th>
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ $order->delivery_charge }}</td>
                </tr>
                <tr style="background-color: #fff;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd;">Discount {{ $currency }} (%)</th>
                    @php
                        $discount_in_rupees = 0;
                        if ( $order->discount > 0) {
                            $discounted_amount = $order->remaining_total * $order->discount / 100;
                            $final_total = $order->remaining_total - $discounted_amount;
                            $discount_in_rupees = $order->remaining_total - $final_total;
                        }
                    @endphp
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ '- ' . $discount_in_rupees . ' (' . $order->discount . '%)'}}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd;">Promo ({{ $order->promo_code }}) Discount ({{ $currency }})</th>
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ '- ' . $order->promo_discount }}</td>
                </tr>
                <tr style="background-color: #fff;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd;">Wallet Used ({{ $currency }})</th>
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ '- ' . $order->wallet_balance }}</td>
                </tr>
                <tr style="background-color: #f0f0f0; font-weight: 600;">
                    <th style="padding: 10px 8px; text-align: left; border: 1px solid #ddd;">Final Total ({{ $currency }})</th>
                    <td style="padding: 10px 8px; text-align: right; border: 1px solid #ddd;">{{ '= ' . ceil($order->remaining_final)}}</td>
                </tr>
                </tbody>
            </table>

            <p style="line-height: 24px; margin-bottom: 15px;">
                We would like to take this opportunity to thank you for your business and look forward to serving you in the future.
            </p>
        @elseif(in_array($order->active_status, array(
                                                \App\Models\OrderStatusList::$processed,
                                                \App\Models\OrderStatusList::$shipped,
                                                \App\Models\OrderStatusList::$outForDelivery
                                             )
                        )
            )
            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $user->name }}
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                Your order has been {{ $status_name }}.
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                This notification is just a friendly reminder (not a bill or a second charge) that on {{ $order->created_at }} you placed an order from
                {{ $app_name }}.
                The charge will appear on your bill.
                This is just a reminder to help you recognise the charge.
            </p>
            <p style="line-height: 24px; margin-bottom: 15px;">
                Order summary
                #{{ $order->id }}
                Final Total - {{ $currency }} {{ $order->remaining_final }}
                We would like to take this opportunity to thank you for your business and look forward to serving you in the future.
            </p>
        @elseif($order->active_status == \App\Models\OrderStatusList::$delivered)
            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $user->name }}
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                Your order has been {{ $status_name }}.
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                This notification is just a friendly reminder (not a bill or a second charge) that on {{ $order->created_at }} you placed an order from
                {{ $app_name }}.
                The charge will appear on your bill.
            </p>

            {{--@include('invoice')--}}

        @elseif(in_array($order->active_status, array(
                                                \App\Models\OrderStatusList::$cancelled,
                                                \App\Models\OrderStatusList::$returned,
                                             )
                        )
        )
            @php
                $isReturned = ($order->active_status == \App\Models\OrderStatusList::$returned);
                $isCancelledCod = ($order->active_status == \App\Models\OrderStatusList::$cancelled && strtoupper($order->payment_method ?? '') == 'COD');
                $showRefundAmount = $isReturned || ($order->active_status == \App\Models\OrderStatusList::$cancelled && !$isCancelledCod);
            @endphp

            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $user->name }}
            </p>

            <p style="line-height: 24px; margin-bottom: 15px;">
                Sorry to see your order #{{ $order->id }} belonging to {{ $user->name }} has been
                {{ $status_name }}. @if($showRefundAmount) If your order is prepaid, you will get refund within few business days. @endif
            </p>
        @endif
    @else
        {{--here customer mail--}}
        @if($role == \App\Models\Role::$roleSeller)

            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $seller->name }}
            </p>

            @if($order->active_status == \App\Models\OrderStatusList::$received)
                <p style="line-height: 24px; margin-bottom:15px;">
                    You have just received new order, #{{ $order->id }}
                </p>
            @else
                <p style="line-height: 24px; margin-bottom:15px;">
                    {{ $subject }}
                </p>
            @endif

            @php
                $redirect_url = (isset($order->id)) ? url('/seller/orders/view/'.$order->id): url('/seller/orders');
            @endphp
        @elseif($role == \App\Models\Role::$roleDeliveryBoy)

            <p style="line-height: 24px; margin-bottom:15px;">
                Dear, {{ $deliveryBoy->name }}
            </p>

            <p style="line-height: 24px; margin-bottom:15px;">
                You have just assigned new order, #{{ $order->id }}
            </p>

            <p style="line-height: 24px; margin-bottom:15px;">

                Estimated delivery time is {{ $order->delivery_time }}
            </p>

            <p style="line-height: 24px; margin-bottom:15px;">
                {{ $subject }}
            </p>

            @php
                $redirect_url = (isset($order->id)) ? url('/delivery_boy/orders/view/'.$order->id): url('/delivery_boy/orders');
            @endphp
        @else

            <p style="line-height: 24px; margin-bottom:15px; font-size: 15px;">
                Dear <strong>{{ $admin->name ?? 'Admin' }}</strong>,
            </p>

            @if($order->active_status == \App\Models\OrderStatusList::$received)
                <div style="background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
                    <strong style="color: #2e7d32; font-size: 16px;">🔔 New Order Received (Admin Tracking Alert)</strong>
                    <p style="margin: 6px 0 0 0; color: #333; font-size: 14px; line-height: 20px;">
                        A new order <strong>#{{ $order->id }}</strong> has been placed on <strong>{{ $order->created_at }}</strong>.
                    </p>
                </div>
            @else
                <p style="line-height: 24px; margin-bottom:15px;">
                    {{ $subject }}
                </p>
            @endif

            {{-- Customer Information Box --}}
            @php
                $orderCustomer = $order->user ?? ($user ?? ($customer ?? null));
            @endphp
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
                <p style="font-size: 15px; font-weight: 700; margin: 0 0 12px 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
                    👤 Customer & Delivery Details:
                </p>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 22px;">
                    <tr>
                        <td style="width: 35%; color: #64748b; padding: 4px 0;">Customer Name:</td>
                        <td style="width: 65%; color: #0f172a; font-weight: 600; padding: 4px 0;">{{ $orderCustomer->name ?? 'Customer' }}</td>
                    </tr>
                    <tr>
                        <td style="color: #64748b; padding: 4px 0;">Mobile / Phone:</td>
                        <td style="color: #0f172a; font-weight: 600; padding: 4px 0;">{{ $orderCustomer->mobile ?? ($order->mobile ?? 'N/A') }}</td>
                    </tr>
                    <tr>
                        <td style="color: #64748b; padding: 4px 0;">Email:</td>
                        <td style="color: #0f172a; padding: 4px 0;">{{ $orderCustomer->email ?? ($order->user_email ?? 'N/A') }}</td>
                    </tr>
                    <tr>
                        <td style="color: #64748b; padding: 4px 0;">Delivery Type:</td>
                        <td style="color: #0f172a; font-weight: 600; padding: 4px 0;">{{ ucfirst($order->order_type ?? 'delivery') }}</td>
                    </tr>
                    @if(!empty($order->delivery_time))
                    <tr>
                        <td style="color: #64748b; padding: 4px 0;">Delivery Time / Slot:</td>
                        <td style="color: #0f172a; padding: 4px 0;">{{ $order->delivery_time }}</td>
                    </tr>
                    @endif
                    <tr>
                        <td style="color: #64748b; padding: 4px 0; vertical-align: top;">Delivery Address:</td>
                        <td style="color: #0f172a; padding: 4px 0;">{{ $order->address ?? 'N/A' }}</td>
                    </tr>
                </table>
            </div>

            {{-- Products Table --}}
            @if(isset($order->items) && count($order->items) > 0)
                <p style="font-size: 15px; font-weight: 700; margin: 0 0 10px 0; color: #1e293b;">📦 Ordered Items:</p>
                <div style="max-width: 100%; overflow-x: auto; margin-bottom: 20px;">
                    <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; font-size: 13px;">
                        <thead>
                            <tr style="background-color: #f1f5f9; color: #334155;">
                                <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">#</th>
                                <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Variant</th>
                                <th style="padding: 8px; text-align: right; border: 1px solid #ddd;">Price</th>
                                <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Qty</th>
                                <th style="padding: 8px; text-align: right; border: 1px solid #ddd;">SubTotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($order->items as $idx => $item)
                                <tr>
                                    <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $idx + 1 }}</td>
                                    <td style="padding: 8px; text-align: left; border: 1px solid #ddd; font-weight: 500;">{{ $item->product_name }}</td>
                                    <td style="padding: 8px; text-align: center; border: 1px solid #ddd;">{{ $item->variant_name }}</td>
                                    <td style="padding: 8px; text-align: right; border: 1px solid #ddd;">{{ $currency }}{{ $item->discounted_price > 0 ? $item->discounted_price : $item->price }}</td>
                                    <td style="padding: 8px; text-align: center; border: 1px solid #ddd; font-weight: 600;">{{ $item->quantity }}</td>
                                    <td style="padding: 8px; text-align: right; border: 1px solid #ddd; font-weight: 600;">{{ $currency }}{{ $item->sub_total }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @endif

            {{-- Financial Summary Table --}}
            <p style="font-size: 15px; font-weight: 700; margin: 0 0 10px 0; color: #1e293b;">💰 Order Summary & Payment:</p>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd; font-size: 14px; margin-bottom: 25px;">
                <tbody>
                    <tr style="background-color: #fff;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Payment Method:</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd; font-weight: 700; color: #0f172a;">{{ strtoupper($order->payment_method ?? 'COD') }}</td>
                    </tr>
                    <tr style="background-color: #f8fafc;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Total Items Price:</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd;">{{ $currency }}{{ $order->remaining_total ?? $order->total }}</td>
                    </tr>
                    <tr style="background-color: #fff;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Delivery Charge:</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd;">{{ $currency }}{{ $order->delivery_charge ?? 0 }}</td>
                    </tr>
                    @if(($order->discount ?? 0) > 0)
                    <tr style="background-color: #f8fafc;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Discount ({{ $order->discount }}%):</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd; color: #16a34a;">- {{ $currency }}{{ round(($order->remaining_total * $order->discount) / 100, 2) }}</td>
                    </tr>
                    @endif
                    @if(($order->promo_discount ?? 0) > 0)
                    <tr style="background-color: #f8fafc;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Promo Discount ({{ $order->promo_code }}):</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd; color: #16a34a;">- {{ $currency }}{{ $order->promo_discount }}</td>
                    </tr>
                    @endif
                    @if(($order->wallet_balance ?? 0) > 0)
                    <tr style="background-color: #fff;">
                        <th style="padding: 8px 12px; text-align: left; border: 1px solid #ddd; font-weight: normal; color: #475569;">Wallet Balance Used:</th>
                        <td style="padding: 8px 12px; text-align: right; border: 1px solid #ddd; color: #16a34a;">- {{ $currency }}{{ $order->wallet_balance }}</td>
                    </tr>
                    @endif
                    <tr style="background-color: #0f172a; color: #ffffff; font-weight: 700; font-size: 15px;">
                        <th style="padding: 10px 12px; text-align: left; border: 1px solid #0f172a;">Final Amount Payable:</th>
                        <td style="padding: 10px 12px; text-align: right; border: 1px solid #0f172a;">{{ $currency }}{{ ceil($order->remaining_final ?? $order->final_total) }}</td>
                    </tr>
                </tbody>
            </table>

            @php
                $redirect_url = (isset($order->id)) ? url('/orders/view/'.$order->id): url('/orders');
            @endphp

            <div style="text-align: center; margin: 25px 0;">
                <a href="{{ $redirect_url }}" style="background-color: #10b981; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">
                    🔍 View Order #{{ $order->id }} in Admin Panel &rarr;
                </a>
            </div>

            <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                <em>This is an automated administrative order tracking alert sent by the {{ $app_name ?? 'Chanda Mama' }} system.<br>Please do not reply directly to this no-reply notification email.</em>
            </p>
        @endif
    @endif
@endif
